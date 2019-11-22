<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Welcome {{ this.userInfo.name }}</div>

                    <div class="card-body">
                        {{ this.userInfo.email }} 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo : ''
            }
        },
        mounted() {
            //console.log('Profile Component mounted.')
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
            console.log('userInfo ' +  this.userInfo.email)
        }
    }
</script>
