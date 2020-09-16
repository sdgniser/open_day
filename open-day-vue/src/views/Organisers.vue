<template>
  <section>
    <h1>Organisers</h1>
    <OrganiserCard
      v-for="organiser in organisers2020"
      :organiser="organiser"
      :key="organiser.name + organiser.affiliation"
    />
    <h2>2019</h2>
    <OrganiserCard
      v-for="organiser in organisers2019"
      :organiser="organiser"
      :key="organiser.name + organiser.affiliation"
    />
    <br />
    <OrganiserCard :organiser="organiser2018" />
    <OrganiserCard :organiser="organiser2017" />
    <OrganiserCard
      v-for="organiser in organisers2016"
      :organiser="organiser"
      :key="organiser.name + organiser.affiliation"
    />
  </section>
</template>
<script lang="ts">
import OrganiserCard from '@/components/OrganiserCard.vue';
export default {
  name: 'Organisers',
  components: {
    OrganiserCard,
  },
  data() {
    return {
      organisers2020: [
        {
          name: 'Akshay Priyadarshani',
          affiliation: 'Chief Coordinator',
          image: require('../assets/Akshay_Priyadarshi.jpeg'),
        },
        {
          name: 'Dhairya Patel',
          affiliation: 'Chemistry',
          image: require('../assets/Dhairya_Patel.jpg'),
        },
        {
          name: 'Nisarg Vyas',
          affiliation: 'Physics',
          image: require('../assets/Nisarg.jpg'),
        },
        {
          name: 'Prem Nigam',
          affiliation: 'Mathematics',
          image: require('../assets/Prem.jpg'),
        },
        {
          name: 'Sanaa Khan',
          affiliation: 'Biology',
          image: require('../assets/Sanna.jpg'),
        },
        {
          name: 'Hradini Konthalapalli',
          affiliation: 'Biology',
          image: require('../assets/Hradini.jpg'),
        },
        {
          name: 'Anshuman Padhi',
          affiliation: 'Logistics',
          image: require('../assets/Anshuman.jpg'),
        },
        {
          name: 'Ayush Singh',
          affiliation: 'Computer Sci.',
          image: require('../assets/ayush_profile.jpg'),
        },
        {
          name: 'Abhishek Anil Deshmukh',
          affiliation: 'Web Developer',
          image: 'https://deshmukh.ml/images/popitalk_dp.jpg',
        },
        {
          name: 'Jyotish',
          affiliation: 'Robotics',
          image: require('../assets/Jyothish.jpg'),
        },
        {
          name: 'Smruthimedha Prida',
          affiliation: 'Design',
          image: require('../assets/Smruti.jpg'),
        },
        {
          name: 'Anoushka Sardar',
          affiliation: 'Logistics',
          image: require('../assets/Anoushka.jpg'),
        },
        {
          name: 'Tanya Pattnaik',
          affiliation: "Volunteer's Coordinator",
          image: require('../assets/Tanya.jpg'),
        },
      ],
      organisers2019: [
        {
          name: 'Pankaj Kumar',
          affiliation: 'Overall',
        },
        {
          name: 'Tanmay Pani',
          affiliation: 'Overall',
        },
        {
          name: 'Pushpa Raj Prasaf',
          affiliation: 'Chemistry',
        },
        {
          name: 'Prakhar Gupta',
          affiliation: 'Chemistry',
        },
        {
          name: 'Srilakshmi',
          affiliation: 'Biology',
          image: require('../assets/srilakshmi.jpeg'),
        },
        {
          name: 'Sourav Agarwal',
          affiliation: 'Biology',
          image: require('../assets/Sourav_Agrawal.jpg'),
        },
        {
          name: 'Akshay Priyadarshani',
          affiliation: 'Physics, Design',
          image: require('../assets/Akshay_Priyadarshi.jpeg'),
        },
        {
          name: 'Dishant Swain',
          affiliation: 'Physics',
        },
        {
          name: 'Paresh Singh Arora',
          affiliation: 'Mathematics',
        },
        {
          name: 'Sannidhya Shukla',
          affiliation: 'Computer Sci.',
        },
        {
          name: 'Aranya Giri',
          affiliation: 'Food',
        },
        {
          name: 'Arnav Paul',
          affiliation: 'Food',
          image: require('../assets/Arnav_Paul.jpg'),
        },
        {
          name: 'Smrutimedha Prida',
          affiliation: 'Invite and design',
          image: require('../assets/Smruti.jpg'),
        },
      ],
      organiser2018: {
        name: 'Biprateep Dey',
        affiliation: '2018 Chief Organiser',
        image: require('../assets/Biprateep_Dey.jpg'),
      },
      organiser2017: {
        name: 'Diptanil Roy',
        affiliation: '2017 Chief Organiser',
        image: require('../assets/Diptanil_Roy.jpg'),
      },
      organisers2016: [
        {
          name: 'Bipradeep Dey',
          affiliation: '2016 Chief Organiser',
          image: require('../assets/Biprateep_Dey.jpg'),
        },
        {
          name: 'Debashish Jena',
          affiliation: '2016 Chief Organiser',
        image: require('../assets/Debashish_Jena.jpg'),
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
section {
  padding: 2vh 3vw;
}
</style>
