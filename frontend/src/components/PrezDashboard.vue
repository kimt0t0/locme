<script lang="ts" setup>
    const listTitle: String = "Sur votre tableau de bord, vous avez accès à:"
    const listItems : String[] = [
        "Vos données personnelles",
        "Les informations relatives à votre location de bracelets connectés LocMe",
        "La liste de vos diverses équipes sur place (accueil, sécurité, ...)",
        "Les codes des bracelets et groupes associés, en cas d'urgence"
    ]
</script>

<template>
    <section class="prezdashboard-section">
        <div class="pds-container">
            <HeroSecondary color="white" align="left">Gérez la sécurité de vos festivalières directement depuis votre tableau de bord</HeroSecondary>
            <div class="pds-contents">
                <div class="pds-illus"></div>
                    <!-- <img src="" class="pds-illus" alt="Démonstration du tableau de bord LocMe" /> -->
                    <ClassicList class="classic-list-cp" :title="listTitle" :listItems="listItems"/>
            </div>
        </div>

    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .prezdashboard-section {
        background-color: $primary;
        padding: $space-xl 0 $space-xxxl;
        .pds-container {
            box-sizing: border-box;
            max-width: $classic-ctn;
            margin: 0 auto;
        }
        .pds-contents {
            display: flex;
            justify-content: space-between;
        }
    }

    .pds-illus {
        height: 330px;
        width: 55%;
        background-color: $grey;
        border-radius: $radius-xxs;
    }
    .classic-list-cp {
        width: 42%;
    }
</style>