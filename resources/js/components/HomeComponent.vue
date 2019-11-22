<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card margn" v-for='post in posts'>
                    <div class="card-header">{{ post.title }}</div>

                    <div class="card-body">
                       {{ post.body }}
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
                posts : []
            }
        },
        mounted() {
            //console.log('Home Component mounted.')
            this.userInfo = this.$userInfo ? JSON.parse(this.$userInfo) : ''
            console.log('userInfo ' +this.userInfo)
        },
        created() {
            //alert('Hi')
            axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_email')
                 axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(({data}) => this.setSuccessMessage(data))
                    .catch(({response}) => this.setErrors(response));
        },
        methods: {
            setSuccessMessage(data) {
                //console.log(data)
                this.posts = data;
            },
            setErrors(setErrors) {
                console.log(setErrors)
            }
        }
    }
</script>
<style type="text/css">
    .margn {
        margin-bottom: 5px;
    }
</style>