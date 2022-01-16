<template>

  <b-container  fluid >
  <b-row>
  
<!-- Cargando -->
   <b-overlay :show="busy"
      rounded
      opacity="0.5"
      spinner-variant="primary"
      class="d-inline-block"
      @hidden="onHidden">


   <!-- FILA TÍTULO -->
    <!-- <b-row align-h="center">
      <b-col cols="12">
        <h1 style="font-family:verdana;color:black;" > Bienvenido al Creador de Perfiles          </h1>
      </b-col>
   </b-row>  -->
 
 

   

  <!-- cards de resultados img-src="https://cdn.pixabay.com/photo/2020/02/15/14/19/network-4851079_960_720.jpg"-->
  <b-card
    overlay
    
    img-src="https://www.xtrafondos.com/wallpapers/colores-en-remolino-abstracto-5836.jpg"
    img-alt="Card Image"
    text-variant="black"
    title=""
    sub-title=""
  >
    <div class="col-lg-12 ">
      <!-- titulos -->
      <h1 style="font-family:verdana;color:white; margin-top:20px;margin-bottom:20px " > Bienvenido al Creador de Perfiles          </h1>
    </div>

    
      <div  style="margin-top:20px;  ">
      <!-- <div  > -->
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

      </div>
  </b-card>

<!-- Template del Cargando   --> 
        <template #overlay>
         
                  <div class="text-center"> 
                     <b-spinner label="Loading..." variant="info" type="grow"  style="width: 3rem; height: 3rem;" ></b-spinner>
                     <p id="cancel-label">Estamos procesando la información...</p>
                    <img >
                  </div>
           
        </template>   
  </b-overlay> 

  </b-row>
  <b-row>
    <!-- Card de resultados -->
    <b-col  md="4" style="padding:0px">
      <b-card       
          id="card1"
          tag="article"
          style="max-width: 35rem;padding:0px;padding-rigth:10px"
          class="mb-2"
        >
        <!-- <img id= "{{this.datosPersonales1.image}}"></img> -->
    
        <!-- <b-img src='this.datosPersonales1.image' ></b-img> -->
        <h4 style="color:black;padding:15px" >{{this.datosPersonales1.name}} </h4>
       
       
          <!-- <b-card-text>Foto: {{this.datosPersonales1.image}}</b-card-text> -->
          <b-card-text>{{this.datosPersonales1.profession}}</b-card-text>
          <b-card-text>{{this.datosPersonales1.location}}</b-card-text>
          <b-card-text>{{this.datosPersonales1.link}}</b-card-text>
          
      </b-card>
    </b-col>
     <b-card  img-left class="mb-1" style="max-width: 40rem;">
       <b-row no-gutters>
      
      <b-col md="12">
        <b-card-body title="Experiencia laboral" align="left">
          <b-card-text>
            {{this.datosPersonales1.experience[0]}}
          </b-card-text>
          <!-- <ul id="example-1">
            <li v-for="item in this.datosPersonales1.experience">
              {{ item.mensaje }}
            </li>
          </ul> -->

        </b-card-body>
      </b-col>
    </b-row>
       
    </b-card>
  </b-row>
 </b-container>


</template>

<script>
 
  var myImage = new Image(100, 200);
  myImage.src = 'https://media-exp1.licdn.com/dms/image/C4E03AQHlEFg3xDa9sg/profile-displayphoto-shrink_400_400/0/1626734513662?e=1648080000&v=beta&t=Jw6PBZIk7vA4mlFA1bSWI1Ho7ja5Zj1sDyNP-9wclwE';
  console.log(myImage);
  export default {

    name:'welcome',
    data() {
      return {
        busy: false,
        timeout: null,
        text: '',
        datosL:{
          name:"Johana Beatriz Diaz Ponte",
          edad:"25",
          trabajo:"Practicante Belcorp"
        },
        datosPersonales:{
          name: '',
          image: '',
          profession: '',
          location: '',
          link: '',
          experience: {'': ['',
            '',
            '',
            '']},
          education: {'': ['',
            '',
            '']},
          licenses_and_certifications: {'': ['',
            '',
            '',
            '']},
          skills: ['', '', ''],
          interests: ['', ''],
          gender: '',
          facebook: '',
          relationship: {'to': '',
            type: '',
            since: ''}
        },
        datosPersonales1:{
          name: 'Johana Beatriz Diaz Ponte',
          image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHlEFg3xDa9sg/profile-displayphoto-shrink_400_400/0/1626734513662?e=1648080000&v=beta&t=Jw6PBZIk7vA4mlFA1bSWI1Ho7ja5Zj1sDyNP-9wclwE',
          profession: 'Practicante en Belcorp',
          location: 'Perú',
          link: 'https://www.linkedin.com/in/johana-beatriz-diaz-ponte/overlay/contact-info/',
          experience: {'Practicante de informática': 
            ['Belcorp · Contrato de prácticas',
            'ene. 2020 - actualidad · 2 años 1 mes',
            'https://www.linkedin.com/company/14812/',
            'https://media-exp1.licdn.com/dms/image/C4D0BAQHkGKI9NHG3xA/company-logo_100_100/0/1625184191659?e=1650499200&v=beta&t=wm20jbzDWdnVngMtuiwtxWtxDcaFxpS6KsywMe5GpjU']},
          education: {'': ['',
            '',
            '']},
          licenses_and_certifications: {'': ['',
            '',
            '',
            '']},
          skills: ['', '', ''],
          interests: ['', ''],
          gender: '',
          facebook: '',
          relationship: {'to': '',
            type: '',
            since: ''}
        }








      }


    },
    // funciones del cargando
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
        // document.write("<div><a id='card1'/>jeje</div>");
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
          document.write("<div><a id='card1'/>jeje</div>");
        })
        
      },

      // funciones del cargando
      mostrarDatos(){
        const datosL ={
          nombre:"Johana Beatriz Diaz Ponte",
          edad:"25",
          trabajo:"Practicante Belcorp"
        }
      }
    }
  }









</script>

