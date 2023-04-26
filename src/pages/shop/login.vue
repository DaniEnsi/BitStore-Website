<script lang="ts">
import Vue from 'vue';
import { supabase } from '../../supabase/supabaseClient';
import { error } from 'console';
import { Sign } from 'crypto';

//<input v-model="name" class="input col-span-1" type="text" placeholder="First Name" />
//<select class="select" v - model="birthyear" >
//  <option value="" disabled selected > Birth Year < /option>
//  <option v -for= "(n, $index) in 80" : value = "$index + currentYear" : key = "n" >
//            {{ currentYear - $index }}
//  </option>
//</select>
//
// To get the Users Email:
//
// const { data: { user: { email } } } = await supabase.auth.getUser()
// console.log(email)


export default Vue.extend({
    data() {
        return {
            SignedIn: false,
            signup: false,
            showpopup1: false,
            showpopup2: false,
            showpopup3: false,
            showpopup5: true,
            inputs_valid: false,
            user_id: "",
            firstname: "",
            valid_firstname: false,
            lastname: "",
            text: "Creating Account...",
            valid_lastname: false,
            email: "",
            icon: "Updating",
            valid_email: false,
            // name: "",
            password: "",
            valid_password: false,
            // birthyear: "",
            loading: false,
            error: "",
            // currentYear: new Date().getFullYear() - 14,
        };
    },
    async mounted() {
        const { data, error } = await supabase.auth.getSession()
        if (data["session"] === null) {
            this.SignedIn = false
        }
        else {
            this.SignedIn = true
            this.$router.push('/shop/account')
        }
    },
    watch: {
        // check that the email is valid
        email() {
            if (this.email.length > 6) {
                if (this.email.includes("@" && ".")) {
                    this.valid_email = true
                }
            }
            this.checkvalid()
            
        },
        password() {
            if (this.password.length > 9) {
                this.valid_password = true
            }
            else {
                this.valid_password = false
            }
            this.checkvalid()
        },
        firstname() {
            if (this.firstname.length > 3) {
                this.valid_firstname = true
            }
            else {
                this.valid_firstname = false
            }
            this.checkvalid()
        },
        // check if signup is true if it is check that the first and last name are valid
        lastname() {
            if (this.lastname.length > 3) {
                this.valid_lastname = true
            }
            else {
                this.valid_lastname = false
            }
            this.checkvalid()
        },

    },
    methods: {
        PopupLogin() {
            this.showpopup1 = false
            this.showpopup1 = true
            this.showpopup2 = false
            this.showpopup3 = false
            setTimeout(() => {
                this.showpopup1 = false
                this.$router.push('/shop')
            }, 2000)
        },
        PopupSignUp() {
            this.showpopup2 = false
            this.showpopup1 = false
            this.showpopup3 = false
            this.showpopup2 = true
            setTimeout(() => {
                this.showpopup2 = false
                this.$router.push('/shop')
            }, 2000)
        },
        PopupError(var1?: boolean) {
            this.showpopup3 = false
            this.showpopup3 = true
            this.showpopup1 = false
            this.showpopup2 = false
            setTimeout(() => {
                this.showpopup3 = false
            }, 5000)
            if (var1) {
                this.switchTab()
            }
        },
        checkvalid() {
            if(this.signup === true) {
                if (this.valid_email && this.valid_password && this.valid_firstname && this.valid_lastname) {
                    this.inputs_valid = true
                }
                else {
                    this.inputs_valid = false
                }
            }
            else {
                if (this.valid_email && this.valid_password) {
                    this.inputs_valid = true
                }
                else {
                    this.inputs_valid = false
                }
            }
        },
        switchTab() {
            this.signup = !this.signup
            this.checkvalid()
            this.$emit
        },
        Sign() {
            if (this.signup === true) {
                this.SignUp()
            }
            else {
                this.SignIn()
            }
        },
        async SignUp() {
            this.PopupSignUp()
            let { data, error } = await supabase.auth.signUp({
                    email: this.email,
                    password: this.password,
                    options: {
                        data: {
                            first_name: this.firstname,
                            last_name: this.lastname,  
                        }
                }
            })
            // if error
            if (String(error) === "AuthApiError: User already registered") {
                this.error = "Already registered"
                this.showpopup2 = false
                this.PopupError(true)
            }
            else if (String(error) === "AuthApiError: Password should be at least 10 characters") {
                this.error = "Password too short"
                this.showpopup2 = false
                this.password = ""
                this.PopupError()
            }
            else if (String(error) !== "null") {
                this.error = "Error"
                this.showpopup2 = false
                this.PopupError()
            }
            else {
                this.user_id = String(data.user?.id)
                this.SignUp2()
                // now call SignUp2
            }
        },
        async SignUp2() {
            const response = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: this.email, name: this.firstname + " " + this.lastname, userid: this.user_id})
            })
            const error = await response.json()
            // if the status code is 200
            if (response.status === 200) {
                this.showpopup2 = false
                this.text = "Account Created"
                this.icon = "Check"
                this.PopupSignUp()
            }
            else {
                this.error = error
                this.showpopup2 = false
                this.PopupError()
            }
            this.showpopup5 = false

        },
        async SignIn() {
            await supabase.auth.signInWithPassword({
                email: this.email,
                password: this.password,
            })
           // if server response is 400
            .then((response) => {
                if (String(response.error) === "AuthApiError: Invalid login credentials") {
                    this.error = "Invalid login credentials"
                    this.email = ""
                    this.password = ""
                    this.PopupError()
                }
                else {
                    this.$store.commit('shop/setEmail', this.email)
                    this.SignedIn = true
                    this.PopupLogin()
                }
            })
            
        },
        async Github() {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: 'http://localhost:8888/shop/?oauth=true'
                }
            })
            console.log(error)
        },   
    },
    head() {
        const title = 'Login';
        const description = 'SignUp to your Account';

        return {
            title,
            meta: this.$prepareMeta({
                title,
                description,
                keywords: 'signup',
                url: 'https://bitstore.dev/signup',
            }),
            link: [
                {
                    rel: 'canonical',
                    href: 'https://bitstore.dev/signup',
                },
            ],
        }
    }
})
</script>

<template>
    <div class="py-4">
        <div class="space-y-12 text-gray-500  dark:text-neutral-600">
            <div class="w-1/2 h-max float-left img <lg:hidden">
                <img src="https://i.vgy.me/xtTWgH.png" alt="Login" class="px-4 pt-52">
            </div>
            <div class="w-1/2 float-right <lg:float-none <lg:w-full">
            <header class="space-y-2 my-12 px-4 ">
                <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300 mb-4">{{signup ? "Create Account" : "Login"}}</h1>
                <p>
                    {{ signup ? "Create your account to get started" : "Login to your account to continue" }}
                </p>
            </header>

            <div class="space-y-12 mt-2">
                <!-- Author Information -->
                <div class="px-4">
                    <Title :padding="false">Account Data</Title>

                    <div class="mt-1 grid gap-3 grid-cols-2 <md:grid-cols-1">
                        <input v-if="signup" v-model="firstname" class="input col-span-1" type="text" placeholder="First Name" />
                        <input v-if="signup" v-model="lastname" class="input col-span-1" type="text" placeholder="Last Name" />
                        <input v-model="email" class="input col-span-2 <md:col-span-1" type="email" placeholder="Email address" />
                        <input v-model="password" class="input col-span-2 <md:col-span-1" @keypress.enter="Sign" type="password" placeholder="Password" />
                    </div>
                </div>
                <div class="px-4">
                    <div v-if="!signup" class="space-y-4 items-center sm:(flex space-x-2 space-y-0)">
                        <Button v-if="inputs_valid" variant="github" type="button" :disabled="loading" @click.native="SignIn">
                            <template #icon>
                                <IconSignIn class="h-6 text-black dark:text-white w-6 " />
                            </template>

                            Sign In
                        </Button>
                        <Button v-else variant="github" type="button" class="opacity-50 cursor-not-allowed">
                            <template #icon>
                                <IconSignIn class="h-6 text-black dark:text-white w-6" />
                            </template>

                            Sign In

                        </Button>
                        <Button variant="github" type="button" :disabled="loading" @click.native="Github" >
                            <template #icon>
                                <IconBrand brand="Github" class="h-6 text-black dark:text-white w-6 " />
                            </template>
                        
                            Sign In with Github
                        </Button>
                    </div>
                    <div v-if="signup" class="space-y-4 items-center sm:(flex space-x-2 space-y-0)">
                        <Button v-if="inputs_valid" variant="github" type="button" :disabled="loading" @click.native="SignUp">
                            <template #icon>
                                <IconSignIn class="h-6 text-black dark:text-white w-6 " />
                            </template>

                            {{ loading ? "Loading..." : "Sign Up" }}
                        </Button>
                        <Button v-else variant="github" type="button" class="opacity-50 cursor-not-allowed">
                            <template #icon>
                                <IconSignIn class="h-6 text-black dark:text-white w-6" />
                            </template>

                            Sign Up

                        </Button>
                        <Button variant="github" type="button" :disabled="loading" @click.native="Github" >
                            <template #icon>
                                <IconBrand brand="Github" class="h-6 text-black dark:text-white w-6 " />
                            </template>
                        
                            Sign Up with Github
                        </Button>
                    </div>
                    <div class="pt-10 flex">
                        <a>
                            Don't have an account? <a @click="switchTab" class="text-neutral-500 hover:text-neutral-300">Sign Up</a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <ShopPopup v-if="showpopup1" name="1" text="Login Successfull" icon="SignIn"/>
        <ShopPopup v-if="showpopup2" name="2" :text="this.text" :icon="this.icon"/>
        <ShopPopup v-if="showpopup3" name="3" :text="error" icon="X"/>
    </div>
</template>






<style lang="scss" scoped>
.control-button {
    @apply rounded py-2 px-4 transition-colors text-gray-900 select-none dark: text-gray-100;

    &:not(.no-background) {
        @apply bg-gray-100 dark: (bg-neutral-800 hover:bg-neutral-700) hover:bg-gray-200;
    }

    &:not(.cursor-not-allowed) {
        @apply cursor-pointer;
    }
}



.select {
    @apply appearance-none dark: bg-neutral-700 bg-gray-200/40 py-2 px-4 dark: text-gray-400 text-gray-400 focus:outline-none
}

.input {
    @apply py-2 px-4 dark: text-gray-200 focus:outline-none;

    &:not(.no-bg) {
        @apply bg-gray-200/40 dark: bg-neutral-700;
    }

    &:not(.rounded-none) {
        @apply rounded-md;
    }

    &:not(.ring-0) {
        @apply ring-offset-gray-100 ring-gray-200 ring-offset-2 dark: (ring-neutral-800 ring-offset-neutral-900) focus:ring-1;
    }
}



pre[class*="language-"] {
    @apply bg-neutral-900;
}

.ring {
    @apply ring-1 ring-offset-2 ring-offset-gray-100 ring-gray-200 dark: (ring-neutral-800 ring-offset-neutral-900);
}

.img {
    line-height: 200px;
}




</style>


