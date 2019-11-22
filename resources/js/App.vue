<template>
   <div class="container">
      <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
         <div class="container">
            <a class="navbar-brand" href="#">
               <router-link to="/home" class="nav-link">Laravel</router-link>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="#">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <!-- Left Side Of Navbar -->
               <ul class="navbar-nav mr-auto">
               </ul>
               <!-- Right Side Of Navbar -->
               <ul class="navbar-nav ml-auto">
                  <!-- Authentication Links -->
                  <!-- <div v-if='!userInfo'> -->
                  <li v-if='!isLogged' class="nav-item">
                     <!-- <a class="nav-link" href="#"></a> -->
                     <router-link to="/login" class="nav-link">Login</router-link>
                  </li>
                  <li v-if='!isLogged' class="nav-item">
                     <router-link to="/register" class="nav-link">Register</router-link>
                  </li>
                  <!-- {{ this.userInfo.name }} -->
                  <li v-else class="nav-item dropdown">
                     <span style="cursor: pointer;" id="navbarDropdown" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ this.userInfo.name }}  <span class="caret"></span>
                     </span>
                     <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <!-- <a class="dropdown-item" href="#"
                           onclick="event.preventDefault();
                           document.getElementById('logout-form').submit();">
                        Logout
                        </a> -->
                        <router-link to="/profile" class="dropdown-item">Profile</router-link>
                        <span @click.prevent="logout" class="dropdown-item">Logout</span>

                        <!-- <form id="logout-form" action="#" method="POST" style="display: none;">
                           @csrf
                        </form> -->
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      <br />
      <transition name="fade">
         <router-view></router-view>
      </transition>
   </div>
</template>
<style>
   /*.fade-enter-active, .fade-leave-active {
   transition: opacity .5s
   }
   .fade-enter, .fade-leave-active {
   opacity: 0
   }*/
</style>
<script>
import EventBus from './event-bus';
   export default {
    data() {
        return {
            userInfo: {},
            isLogged: this.checkIfIsLogged()
        }
    },
    created() {
        this.userInfo = this.$userInfo ? JSON.parse(this.$userInfo) : ''
        EventBus.$on('logged', function(payLoad) {
            console.log('payLoad ' + payLoad)
            this.userInfo = payLoad
            console.log('email ' + this.userInfo)
            this.isLogged = this.checkIfIsLogged()
        }.bind(this));
        //console.log(this.isLogged)
    },
    methods: {
        logout: function() {
            //alert('logout')
            //this.$localStorage.remove('access_email')
            localStorage.removeItem('access_email');
            //EventBus.$emit('logout', 'User logged Out');
            this.isLogged = false
            axios.get('/laravel-vue-app/public/logout')
                .then(({
                    data
                }) => console.log(data))
                .catch(({
                    response
                }) => console.log(response));
            //.then(({data}) => this.setSuccessMessage(data))
            //.catch(({response}) => this.setErrors(response));
            //location.reload();
            window.location.href ='/laravel-vue-auth/public/login'
            // this.$router.push({
            //     name: 'login',
            //     params: {
            //         success: true
            //     }
            // });
        },
        checkIfIsLogged() {
            //let token = this.$localStorage.get('access_email')
            //alert('123')
            let token = null;
            if (localStorage.access_email) {
                token = localStorage.access_email;
            }
            console.log('token ' + localStorage.access_email)
            if (token) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>