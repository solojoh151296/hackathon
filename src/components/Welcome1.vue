<template>

  <b-container  fluid >
  <b-row v-if="cards == false ">
  
<!-- Cargando -->
   <b-overlay :show="busy"
      rounded
      opacity="0.5"
      spinner-variant="primary"
      class="d-inline-block"
      @hidden="onHidden">

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
      <h1 style="font-family:verdana;color:white; margin-top:20px; " > Bienvenido al Creador de Perfiles          </h1>
    </div>

    
      <div  style="margin-top:15%;  ">
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
  <!-- RESULTADOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOS -->
  <b-row v-if="cards == true ">
    <div class="col-lg-12 ">
      <!-- titulos -->
      <h1 style="font-family:verdana;color:white; margin-top:20px;margin-bottom:20px; " > Resultados de {{this.datosPersonales1.name}} </h1>
    </div>
    <!-- Card de resultados -->
    <b-col  v-if=" this.datosPersonales1.name">
      
            <b-card       
                id="card1"
                tag="article"
                style="max-width: 35rem;padding-rigth:0px"
                class="mb-2"
                md="12" sm="12" xs="12" lg="12"
              >
              <img  style="max-width: 30rem;max-heigth: 30rem;"  
              :src="datosPersonales1.image" />
                  
                <h4 style="color:black;padding:15px" >{{this.datosPersonales1.name}} </h4>
            
                <b-card-text>{{this.datosPersonales1.profession}}</b-card-text>
                <!-- <b-card-text>{{this.text}}</b-card-text> -->
                <b-card-text>{{this.datosPersonales1.location +" - " +this.datosPersonales1.gender}}</b-card-text>
                <!-- <b-card-text>{{}}</b-card-text> -->
                <b-card-text>{{this.datosPersonales1.birthday}}</b-card-text>
                <!-- <b-card-text>{{this.datosPersonales1.link}}</b-card-text> -->
                <!-- <b-link :href="www.facebook.com + this.datosPersonales1.facebook " >Disabled Link</b-link> -->
          
                
                
            </b-card>
    
          <b-col md="12" sm="12" xs="12" lg="12" v-if="datosPersonales1.skills" style="padding:0px">     
            <b-card  img-top  border-variant="light"  header-html="<h3><b>Habilidades</b><h3>" >  
                <b-card-body  align="left">
                  <b-row  v-for="dato in datosPersonales1.skills" :key="dato.id"  >

                      <b-col md="10" sm="8" xs="8" lg="10"  style="padding:10px">
                        <b-row>
                            <b-icon icon="check" font-scale="1" variant="info" />
                            <b-card-text >                                    
                              {{dato}}   
                            </b-card-text> 
                        </b-row>
                      </b-col>
                  </b-row>
                </b-card-body>
            </b-card>
          </b-col>

      
    </b-col>
    
    <b-col md="8" sm="12" xs="12" lg="8" v-if="datosPersonales1.experience">     
      <b-card  img-top  border-variant="light"  header-html="<h3><b>Experiencia laboral</b><h3>" >  
          <b-card-body  align="left">
            <b-row  v-for="dato in datosPersonales1.experience" :key="dato.id"  >
                <!-- <b-card-text>Cantidad total: {{this.rpta1.cantidadTotal}}  </b-card-text>  --> 
                <b-card-text v-if="dato[0].length===1" >                                    
                    <b> {{dato}}  </b>
                </b-card-text> 

                <b-col md="2" sm="2" xs="2" lg="2" v-if="dato[0].length >1">                  
                  <img  style="max-width:3rem;max-heigth:3rem;"  
                    :src="dato[3]"/>                     
                </b-col>

                <b-col md="10" sm="8" xs="8" lg="10" v-if="dato[0].length >1" style="padding:10px">
                  <b-row>
                      <b-icon icon="check" font-scale="1" variant="info" />
                      <b-card-text >                                    
                        {{dato[0]+" - "+dato[1]}}   
                      </b-card-text> 
                  </b-row>
                </b-col>
            </b-row>
          </b-card-body>
      </b-card>
    </b-col>

    






  </b-row>
 </b-container>


</template>

<script type="type/javascript">
import axios from 'axios';
    
  export default {

    name:'welcome',
    data() {
      
      return {
        busy: false,
        timeout: null,
        
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
          experience: ['Practicante de informática',
            ['Belcorp · Contrato de prácticas',
            'ene. 2020 - actualidad · 2 años 1 mes',
            'https://www.linkedin.com/company/14812/',
            'https://media-exp1.licdn.com/dms/image/C4D0BAQHkGKI9NHG3xA/company-logo_100_100/0/1625184191659?e=1650499200&v=beta&t=wm20jbzDWdnVngMtuiwtxWtxDcaFxpS6KsywMe5GpjU'],
            'Practicante',
            ['LinkedIn · Practicante',
            'oct. 2021 - actualidad · 1 año',
            'https://www.linkedin.com/company/1337/',
            'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1650499200&v=beta&t=tQzbzGcdo5F-3CSaugInYnYzh3KpasaCiObVENXdFmc'],
            'Diseñadora gráfica',
            ['Of. Bienestar Ciencias · TPA',
            'oct. 2021 - actualidad · 3 meses',
            'https://www.linkedin.com/company/37835/',
            'https://media-exp1.licdn.com/dms/image/C4E0BAQHNxJdDKSu80g/company-logo_100_100/0/1626692502131?e=1650499200&v=beta&t=s3FCvMQFbx0jCPBNsqH5NX-9K--ULVY9Ce7dD65QNik'],
            'Analista de datos',
            ['LinkedIn · Practicante',
            'oct. 2021 - actualidad · 3 meses',
            'https://www.linkedin.com/company/1337/',
            'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1650499200&v=beta&t=tQzbzGcdo5F-3CSaugInYnYzh3KpasaCiObVENXdFmc'],
            'Practicante',
            ['LinkedIn · Practicante',
            'oct. 2021 - actualidad · 1 año',
            'https://www.linkedin.com/company/1337/',
            'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1650499200&v=beta&t=tQzbzGcdo5F-3CSaugInYnYzh3KpasaCiObVENXdFmc'],
            'Diseñadora gráfica',
            ['Of. Bienestar Ciencias · TPA',
            'oct. 2021 - actualidad · 3 meses',
            'https://www.linkedin.com/company/37835/',
            'https://media-exp1.licdn.com/dms/image/C4E0BAQHNxJdDKSu80g/company-logo_100_100/0/1626692502131?e=1650499200&v=beta&t=s3FCvMQFbx0jCPBNsqH5NX-9K--ULVY9Ce7dD65QNik'],
            
            
            ],
          education: {'': ['',
            '',
            '']},
          licenses_and_certifications: {'': ['',
            '',
            '',
            '']},
          skills:  ['Analítica de datos', 'Inteligencia empresarial', 'Analítica'],
          interests: ['', ''],
          gender: 'Femenino',
          birthday:'December 15, 1996',
          facebook: '/johana.diazponte',
          relationship: {'to': '',
            type: '',
            since: ''}
        },
        cards:false, //condicional que activa los resultados en cards
        // expe:this.datosPersonales1.experience,
        src:'https://st.depositphotos.com/2290789/3667/i/600/depositphotos_36675429-stock-photo-king-lion-aslan.jpg',
        conexion:'https://perfiles-backend.herokuapp.com/',
        rpta1:{'cantidadTotal':'0', 'cantidadAnalisis':'0'},
        text: "",
      }


    },
    // funciones del cargando
    beforeDestroy() {
      this.clearTimeout()
    },
    methods: {
      clearTimeout() {
         this.leerDatosPersonales()
        if (this.timeout  ) {
          clearTimeout(this.timeout)
          this.timeout = null
        }
      },
      setTimeout(callback) {
        this.clearTimeout()
        var time=1000
        // if(this.rpta1.cantidadTotal!=0) time=0;
        this.timeout = setTimeout(() => {
          this.leerDatosPersonales()
          if(this.rpta1.cantidadTotal!=0 ){
              this.clearTimeout()
          }

          callback()
        }, time)
        // document.write("<div><a id='card1'/>jeje</div>");
      },
      onHidden() {
        // Return focus to the button once hidden
        this.$refs.button.focus()
        this.cards = true
                
      },
      onClick() {
        this.busy = true
        // Simulate an async request
        this.setTimeout(() => {
          this.busy = false 
           this.leerDatosPersonales()         
        })
        // this.leerDatosPersonales()
        
        
      },

      // funciones del cargando
      leerDatosPersonales(){
        /*
       axios.get(this.conexion+'info/?fbclid=IwAR0Nw9wXH_O5qYNGJen9w_oqTedPHExZvTPnG-d_wbILiysz1xAmXkirnzU'
       //,{
        // params:{
        //   perpage:5
        // }
        //}
      ).then(response =>{
        // console.log(this.rpta1.cantidadTotal)
        // console.log(response.data)
        // this.rpta1=response.data
        // console.log(this.rpta1.cantidadTotal)

      }).catch( e => {
        console.log(e)
      })
      */
      
      
      }
    }
  }









</script>

