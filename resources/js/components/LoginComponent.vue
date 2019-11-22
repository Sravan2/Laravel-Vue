<template>
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-md-8">
            <div class="card">
               <div class="card-header">Login</div>
               <div class="card-body">
                  <!-- <form method="POST" action="#"> -->
                  <form class="form-horizontal" method="post" @submit.prevent="onSubmit">
                     <!-- @csrf -->
                     <div class="form-group row">
                        <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
                        <div class="col-md-6">
                           <input id="email" type="email" class="form-control" v-model="email">
                           <span v-if="errors.email" class="help-block text-danger">{{ errors.email[0] }}</span>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                        <div class="col-md-6">
                           <input id="password" type="password" class="form-control" v-model="password">
                           <span v-if="errors.password" class="help-block text-danger">{{ errors.password[0] }}</span>
                        </div>
                     </div>
                     <div class="form-group row">
                        <div class="col-md-6 offset-md-4">
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" name="remember" id="remember">
                              <label class="form-check-label" for="remember">
                              Remember Me
                              </label>
                           </div>
                        </div>
                     </div>
                     <div class="form-group row mb-0">
                        <div class="col-md-8 offset-md-4">
                           <button type="submit" class="btn btn-primary">
                           Login
                           </button>
                        </div>
                     </div>
                     <span>{{ this.errorMsg }}</span>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import EventBus from '../event-bus';
   export default {
   	props : ['user'],
       data() {
            return {
                errors: [],
                errorMsg: '',
                saved: false,
                email: null,
                password: null,
                userInfo: ''
            };
        },
       mounted() {
       	this.userInfo = this.$userInfo ? JSON.parse(this.$userInfo) : ''
       		console.log('userInfo ' +this.userInfo)
       },
       methods: {
            onSubmit() {
                this.saved = false;  
                this.errors = []; 
                axios.post('/laravel-vue-auth/public/login', {email: this.email, password: this.password})
                    .then(({data}) => this.setSuccessMessage(data))
                    .catch(({response}) => this.setErrors(response));
            },
   
            setErrors(response) {
            	  //console.log(response)
                if(response.data.errors) {
                  this.errors = response.data.errors;  
                }
                
                this.errorMsg = response.data.message
                //console.log(this.errorMsg)
            },
   
            setSuccessMessage(data) {
            	//console.log(data.user.email);
                this.reset();
                this.saved = true;
                //this.$localStorage.set('access_token', responseData.token)
                //this.$localStorage.set('access_email', data.user.email)
                localStorage.setItem('userInfo', JSON.stringify(data.user));
                localStorage.setItem('access_email', data.user.email);
                //window.location.href ='/laravel-vue-auth/public/'
                //this.$bus.$emit('logged', 'User logged')
                EventBus.$emit('logged', data.user);
                this.$router.push({name: 'home',params: { success: true }});
            },
   
            reset() {
                this.errors = [];
                this.login = {name: null, email: null, body: null};
            }
        }
   }
</script>