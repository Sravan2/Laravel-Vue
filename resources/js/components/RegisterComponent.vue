<template>
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-md-8">
            <div class="card">
               <div class="card-header">Register</div>
               <div class="card-body">
                  <form method="POST" action="#">
                     <!-- @csrf -->
                     <div class="form-group row">
                        <label for="email" class="col-sm-4 col-form-label text-md-right">First Name</label>
                        <div class="col-md-6">
                           <input id="firstname" type="email" class="form-control" name="email" value="" required autofocus>
                           <span class="invalid-feedback" role="alert">
                           <strong>dsadsa</strong>
                           </span>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Last Name</label>
                        <div class="col-md-6">
                           <input id="lastname" type="text" class="form-control" name="password" >
                           <span class="invalid-feedback" role="alert">
                           <strong>sdasdsad</strong>
                           </span>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
                        <div class="col-md-6">
                           <input id="email" type="email" class="form-control" name="email" value="" required autofocus>
                           <span class="invalid-feedback" role="alert">
                           <strong>dsadsa</strong>
                           </span>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                        <div class="col-md-6">
                           <input id="password" type="password" class="form-control" name="password" >
                           <span class="invalid-feedback" role="alert">
                           <strong>sdasdsad</strong>
                           </span>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                        <div class="col-md-6">
                           <input id="cpassword" type="password" class="form-control" name="password" >
                           <span class="invalid-feedback" role="alert">
                           <strong>sdasdsad</strong>
                           </span>
                        </div>
                     </div>
                     <div class="form-group row mb-0">
                        <div class="col-md-8 offset-md-4">
                           <button type="submit" class="btn btn-primary">
                           Login
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
       mounted() {
           console.log('Register Component mounted.')
       }
   }
</script>