Vue.component('message', {

	props: ['title', 'body', 'image'],

	template: `

		        <v-layout>
		          <v-flex xs12 sm6 offset-sm3>
		            <v-card>
		              <v-card-media src="https://i1.wp.com/medioambienteynaturaleza.com/wp-content/uploads/2015/08/Animales-tiernos-aj.jpg" height="500px">
		              </v-card-media>
		              <v-card-title primary-title>
		                <div>
		                  <h3 class="headline mb-0">{{ title }}</h3>
		                  <div>{{ body }}</div>
		                </div>
		              </v-card-title>
		              <v-card-actions>
		                <v-btn flat class="orange--text">Share</v-btn>
		                <v-btn flat class="orange--text">Explore</v-btn>
		              </v-card-actions>
		            </v-card>
		          </v-flex>
		        </v-layout>

	`
	

})

new Vue({

	el: '#root'
	
})