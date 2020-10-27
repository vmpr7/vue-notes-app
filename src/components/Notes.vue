<template>
  <DataView :value="notesFilter" :layout="layout" :paginator="false" :sortOrder="sortOrder" :sortField="sortField"  >
      <template #header>
          <div class="p-grid p-nogutter">
              <div class="p-md-4 p-d-md-inline-block p-d-none" style="text-align: left">
                  <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="По дате" @change="onSortChange($event)" />
              </div>
              <div class="p-md-4 p-sm-8 p-mx-sm-auto">

              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text" v-model="search" placeholder="Search" />
              </span>

              </div>
              <div class="p-md-4 p-d-md-inline-block p-d-none" style="text-align: right">
                  <DataViewLayoutOptions v-model="layout" />
              </div>
          </div>
      </template>

      <template #list="slotProps">
          <div class="p-col-12">
            <div class="note p-m-3">
                <Card class="p-shadow-3">
                  <template v-slot:title>
                    <Inplace class="p-reset p-d-inline-block" :closable="true">
                      <template class="p-reset" #display>
                        <h2 class="p-reset">{{ slotProps.data.title }}</h2>
                          
                      </template>
                      <template #content>
                          <InputText v-model="slotProps.data.title" autoFocus />
                      </template>
                    </Inplace>
                    <!-- {{ slotProps.data.title }} -->
                    <Button @click="removeNote(slotProps.index)" icon="pi pi-times" class="close p-button-rounded p-button-danger p-button-text"  />
                  </template>
                  
                  <template v-slot:content>
                    <p>{{ slotProps.data.descr }}</p>
                  </template>
                  <template v-slot:subtitle>
                    <small>{{ slotProps.data.date }}</small>
                  </template>
                </Card>
              </div>
          </div>
      </template>

      <template #grid="slotProps">
          <div class="p-col-12 p-md-4">
            <div class="note p-m-3">
                <Card class="p-shadow-3">
                  <template v-slot:title>
                    <Inplace class="p-reset p-d-inline-block" :closable="true">
                      <template class="p-reset" #display>
                        <h2 class="p-reset">{{ slotProps.data.title }}</h2>
                          
                      </template>
                      <template #content>
                          <InputText v-model="slotProps.data.title" autoFocus />
                      </template>
                    </Inplace>
                    <Button @click="removeNote(slotProps.index)" icon="pi pi-times" class="close p-button-rounded p-button-danger p-button-text"  />
                  </template>
                  
                  <template v-slot:content>
                    <p>{{ slotProps.data.descr }}</p>
                  </template>
                  <template v-slot:subtitle>
                    <small>{{ slotProps.data.date }}</small>
                  </template>
                </Card>
              </div>
          </div>
      </template>

      <template #empty>Записей не найдено.</template>

  </DataView>
</template>


<script>
import Card from 'primevue/card';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dropdown from 'primevue/dropdown'
import search from '@/components/Search.vue'
import Inplace from 'primevue/inplace';

export default {
  components:{
    Card, DataView, DataViewLayoutOptions, Dropdown, search, Inplace
  },
  data() {
    return {
      search: this.value,
      // filter: '',
      // filters:{},
      // notes: null,
      layout: 'grid',
      sortKey: null,
      sortOrder: null,
      sortField: null,
      sortOptions: [
        { label: 'Старые -> Новые', value: 'date' },
        { label: 'Новые -> Старые', value: '!date' },
      ],
    }
  },
  created() {

  },
  mounted () {

  },
  watch:{
    // search(val) {
    //   this.$emit('search', val)
    //   console.log(val)
    // }
  },

computed:{
    notesFilter() {
      let array = this.notes,
          search = this.search
      if (!search) return array
      
      // console.log(array[0])
      
      search = search.trim().toLowerCase()
      // Filter
      array = array.filter(function (item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item
          
        }
      })
      return array
    }
  },

  props: {
    notes: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Notes App'
    }
    // grid: {
    //   type: Boolean,
    //   required: true
    // },
  },
  methods: {
    removeNote(index) {
      this.$emit('remove', index)
    },
    onSortChange(event){
        const value = event.value.value;
        const sortValue = event.value;
        console.log(value, event.value, )

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
            this.sortKey = sortValue;
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
            this.sortKey = sortValue;
        }
    },
  }
}
</script>


<style lang="scss" scoped>
  h1 {
    font-size: 20px;
    text-align: center;
  }
  .note {
    transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: translate(0, -6px);
      transition-delay: 0s !important;
    }
  }
  .close {
    float: right;
  }

</style>

<style lang="scss">
  .p-inplace { 
    .p-inplace-display {
      display: inline-block;
      padding: 0;
    }
  }
</style>