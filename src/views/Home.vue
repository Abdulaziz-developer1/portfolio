<template>
    <main data-aos="fade-up">
        <h1>Hello, I am <span>Abdulaziz</span>, </h1>
        <img src="https://readme-typing-svg.demolab.com/?font=sans+serif&font-weight=800&size=50&duration=2500&pause=500&color=42b983&center=true&vCenter=true&width=700&lines=React+JS%20Developer+%7C;Vue%20JS%20Developer%7C;+Hireable;Always+Active+%7C;+Github+Contributer;Codewars+Active+User"
            alt="Typing SVG" />
        <p>Hello, I am Front-end developer learning Vue JS and looking for online work. I am able to create websites,
            telegram bots and web designs. I ... <router-link to="/about">read more</router-link></p>
    </main>
    <section data-aos="fade-up" class="services">
        <h2>Services</h2>
        <div class="cards">
            <div @click="redirect" class="card" v-for="(service, index) in services" :key="index">
                <h3>{{ service.name }}</h3>
                <p>{{ service.about }}</p>
            </div>
        </div>
        <router-link to="/services">Read more</router-link>
    </section>
    <section data-aos="fade-up" class="sociality">
        <h2>Contact & blog</h2>
        <div style="display: flex; gap: 20px; align-items: center; justify-content: center;">
            <!-- Instagram (Square with Border) -->
            <a href="https://github.com/Abdulaziz-developer1" target="_blank"
                style="width: 100px; height: 100px; border-radius: 12px; border: 1px solid #ddd; display: flex; justify-content: center; align-items: center; background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/640px-Instagram_logo_2016.svg.png"
                    alt="Instagram" width="60">
            </a>

            <!-- GitHub (Square with Border) -->
            <a href="https://instagram.com/t__abdulaz1z" target="_blank"
                style="width: 100px; height: 100px; border-radius: 12px; border: 1px solid #ddd; display: flex; justify-content: center; align-items: center; background: #000;">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub"
                    width="60" style="filter: invert(1);">
            </a>

            <!-- Telegram (Square with Border) -->
            <a href="https://t.me/t_abdulaziz_t" target="_blank"
                style="width: 100px; height: 100px; border-radius: 12px; border: 1px solid #ddd; display: flex; justify-content: center; align-items: center; background: #0088cc;">
                <img src="https://telegram.org/img/t_logo.png" alt="Telegram" width="60">
            </a>
            <router-link to="/sociality">See more ...</router-link>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            services: [{ name: 'Web development', about: 'I can build simple web site using HTML, CSS, JS, React JS and Vue JS for you' }, { name: 'Telegram bot', about: 'I can create a telegram bot for you using Node JS' }, { name: 'Web designing', about: "I can design websites and logos for you using Figma" }]
        }
    }, methods: {
        redirect() {
            this.$router.push('/services');
        }
    }
}
</script>

<style>
main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
    gap: 30px;
}

h1 {
    font-weight: 400;
    font-size: 50px;
}

p {
    max-width: 450px;
    font-size: 20px;
    line-height: 1.5em;
}

.services {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}

@media (max-width:768px){
    .cards{
        flex-wrap: wrap;
    }

    .card{
        min-width: 90%;
    }
}

.cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 75%;
}

.card {
    width: 30%;
    border: 2px solid;
    height: 170px;
    padding: 20px;
    border-radius: 10px;
}

.card:hover {
    box-shadow: 10px -5px 35px #fff;
}

.card h3 {
    width: 100%;
    height: 30%;
}

.sociality {
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>