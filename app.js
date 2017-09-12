Vue.component('message', {

	props: ['title', 'body', 'image'],

	data(){

		return {

			isVisible: true

		}

	},

	template: `

		        <v-layout class="message mt-5" v-show="isVisible">
		          <v-flex xs12 sm6 offset-sm3>
		            <v-card>
		              <v-card-media :src=" image " height="500px">
		              </v-card-media>
		              <v-card-title primary-title>
		                <div>
		                  <h3 class="headline mb-0">{{ title }}</h3>
		                  <div>{{ body }}</div>
		                </div>
		              </v-card-title>
		              <v-card-actions>
		                <v-btn flat class="orange--text">Compartir</v-btn>
		                <v-btn flat class="orange--text">Explorar</v-btn>
		                <v-btn flat class="orange--text" @click="isVisible = false">Cerrar</v-btn>
		              </v-card-actions>
		            </v-card>
		          </v-flex>
		        </v-layout>

	`,
	
});

new Vue({

	el: '#root'
	
});