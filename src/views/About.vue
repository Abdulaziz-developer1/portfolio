<template>
    <main>
        <h1>Hello, I am <span>Abdulaziz</span>, </h1>
        <img src="https://readme-typing-svg.demolab.com/?font=sans+serif&font-weight=800&size=50&duration=2500&pause=500&color=42b983&center=true&vCenter=true&width=700&lines=React+JS%20Developer+%7C;Vue%20JS%20Developer%7C;+Hireable;Always+Active+%7C;+Github+Contributer;Codewars+Active+User"
            alt="Typing SVG" />
        <pre>Hello! I’m Abdulaziz, a passionate Front-end Developer specializing in modern web technologies. Currently,
            I’m deepening my expertise in Vue.js to build dynamic, responsive, and user-friendly applications. I thrive
            on turning ideas into functional, visually appealing digital experiences.

            What I Offer:

            Website Development: From sleek landing pages to interactive web apps, I craft clean, performant sites using
            HTML5, CSS3, JavaScript, and Vue.js.

            Telegram Bots: Need automation or engagement tools? I develop efficient Telegram bots to streamline
            workflows or enhance user interaction.

            Web Design: I blend aesthetics with usability, creating intuitive designs (UI/UX) that align with your
            brand’s identity.

            Mentorship: Enjoy teaching! I can guide beginners through the basics of Front-end development, helping you
            understand core concepts like DOM manipulation, APIs, and responsive design.

            Why Work With Me?
            I’m not just a coder—I’m a problem-solver who values collaboration and continuous learning. Whether you’re a
            startup, business, or fellow developer, I’m eager to contribute to projects that challenge me to grow. Let’s
            connect and build something remarkable together!

            Currently seeking remote/online opportunities. <router-link to="/sociality">✉️ Let’s chat!</router-link></pre>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
main{
    height: auto;
}

main pre {
    max-width: none;
    /* font-size: 1.5em; */
    padding: 20px;
}

@media (max-width:768px){
    main pre{
        font-size: .6em;
    }
}
</style>

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