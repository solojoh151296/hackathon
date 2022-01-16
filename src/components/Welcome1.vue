<template>

  <b-container  class="bv-example-row ">

<!-- Cargando -->
   <b-overlay :show="busy"
      rounded
      opacity="0.5"
      spinner-variant="primary"
      class="d-inline-block"
      @hidden="onHidden">


   <!-- FILA TÍTULO -->
    <b-row align-h="center">
      <b-col cols="12">
        <h1 style="font-family:verdana;color:black;" > Bienvenido al Creador de Perfiles          </h1>
      </b-col>
   </b-row> 
 
 <b-row align-h="center">
      <b-col cols="12">
        <h1 style="font-family:verdana;color:white;" > Bienvenido al Creador de Perfiles          </h1>
      </b-col>
   </b-row> 


    <!-- FILA BUSCADOR -->
      <b-row align-h="center" >    
          <b-col sm="12" md="12">      
            <!-- Input buscador -->
            <b-input-group size="lg" class="mb-3" >
              <!-- Input      -->
              <b-form-input aria-label="Large text" v-model="text" placeholder="https://www.linkedin.com/" ></b-form-input>
              
            <!-- Botón buscar -->
              <b-input-group-append >     
                <!-- <b-button variant="info" v-b-modal="'modal-sm'"  @click="show = true"> -->
                <b-button variant="info"
                        ref="button"
                        :disabled="busy"
                         @click="onClick" >
                  <b-icon icon="search" font-scale="1" ></b-icon> 
                </b-button>         
                

              </b-input-group-append>         
            
      
            </b-input-group>
          </b-col> 
      </b-row>
      
        <b-link href="#foo">Link</b-link>

        <!-- Template del Cargando   --> 
        <template #overlay>
         
                  <div class="text-center"> 
                     <b-spinner label="Loading..." variant="info" type="grow"  style="width: 3rem; height: 3rem;" ></b-spinner>
                     <p id="cancel-label">Estamos procesando la información...</p>
                    <img >
                  </div>
           
        </template>   
  </b-overlay>  



</b-container>


</template>

<script>

  
  export default {

    
    data() {
      return {
        busy: false,
        timeout: null,
        text: ''
        
        }


    },
    beforeDestroy() {
      this.clearTimeout()
    },
    methods: {
      clearTimeout() {
        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = null
        }
      },
      setTimeout(callback) {
        this.clearTimeout()
        this.timeout = setTimeout(() => {
          this.clearTimeout()
          callback()
        }, 5000)
      },
      onHidden() {
        // Return focus to the button once hidden
        this.$refs.button.focus()
      },
      onClick() {
        this.busy = true
        // Simulate an async request
        this.setTimeout(() => {
          this.busy = false
        })
      }
    }
  }









</script>

