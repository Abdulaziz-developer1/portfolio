<template>
    <section class="sociality">
        <h2>Contact & Social</h2>
        <div style="display: flex; gap: 20px; align-items: center; justify-content: center; flex-direction: column;">
            <a target="_blank" href="https://www.linkedin.com/in/abdulaziz-tohirov-923604325/" class="logo"
                style=" height: 100px; border-radius: 12px; border: 1px solid #ddd; display: flex;align-items: center; background: #0077b5;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                    alt="LinkedIn" width="60">
                    <p>abdulaziz-tohirov-923604325</p>
            </a>
            <a href="https://github.com/Abdulaziz-developer1" target="_blank" class="logo"
                style=" height: 100px; border-radius: 12px; border: 1px solid #ddd; display: flex;align-items: center; background: #000;">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub"
                    width="60" style="filter: invert(1);">
                    <p>Abdulaziz-developer1</p>
            </a>
            <a target="_blank" href="https://instagram.com/t__abdulaz1z" class="logo"
                style=" height: 100px; border-radius: 12px; border: 1px solid #ddd; display: flex;align-items: center; background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/640px-Instagram_logo_2016.svg.png"
                    alt="Instagram" width="60">
                    <p>@t__abdulaz1z</p>
            </a>
            <a href="https://t.me/t_abdulaziz_t" target="_blank" class="logo"
                style=" height: 100px; border-radius: 12px; border: 1px solid #ddd; display: flex;align-items: center; background: #0088cc;">
                <img src="https://telegram.org/img/t_logo.png" alt="Telegram" width="60">
                <p>@t_abdulaziz_t</p>
            </a>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
    width: 500px;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
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