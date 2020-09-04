<template>
  <section>
    <h1>Organisers</h1>
    <OrganiserCard :organiser="organiser" v-for="organiser in organisers2020" :id="organiser.name" />
    <h2>2019</h2>
    <OrganiserCard :organiser="organiser" v-for="organiser in organisers2019" :id="organiser.name" />
    <OrganiserCard :organiser="organiser2018"/>
    <OrganiserCard :organiser="organiser2017"/>
    <OrganiserCard :organiser="organisers" v-for="organiser in organisers2016" :id="organiser.name"/>
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
          image: 'https://lh3.googleusercontent.com/fife/ABSRlIpFpSkVMGxQmu6xEF_GsHDHnsiwy9nfPjrJ01UmEgdoGfsXOhccIQ6fAcj9Zs4cgX3LHIXhbQebrraPcWRIpk6YJAivO_BV4J0mdfEdsbGT9BqnQPY77cYAdJbuBklcGiNc69rMnnkJQxay2DQIXN_lZi0kqfPsjyHJok7U9XtHPfcZQdERKEPDWGMNkro-ygF6fvqUuUIc0HYJR4tHyltiOID-hdByAcnagf83yEQBrXzIw2eMmcnejMduZd9wHoJJgxZpzlydFwpRTRQZuOyqty8831s1EFHGaA98GdiHj-XPP_SjFpHjkR8V15yKkgkqtZ_Q9fPVzEBbRPDGAT_GzzxhwMlzxx1_MwNVdYpAn-u_m8DfIc02bOyOmkgvIIxQK3Q78yqQb1UE2TRSD-fNB5Nyibme3P3AwTM4uOKyB_-dzx1V0MGt93ueSgk3LsNpti5fO20bZkFyJa-o_tLtKGRUYA4utC354Q_NVdp6HWAXz3FcUZzeEhJ8oITSlVaAMbR3zlBcu5yXNvxfSj-vksR9nQlWEROT-_HSUpTmj4cksGbqLl9TGaqpUkkg1lCCQDHLbb6YxxwspSROZaUJWAxyntAglGlPzCaT90496hC2uwC_waUFBx8rBwF8A3RIsVGwARlFweUDZfMOzYHVr7luDnur4I2FQhR6BpzQSUmNDQi88-nqSyXB8EZFvfiuX0Zwo-i0MIvexkw3Ltu3woE=w1360-h670-ft'
        },
        {
          name: 'Dhairya Patel',
          affiliation: 'Chemistry',
          image: 'https://lh3.google.com/u/0/d/1rwga6d-Zg2R2EVGWiy8-uGJVEvQ03riv=w745-h670-iv2'
        },
        {
          name: 'Sanaa Khan',
          affiliation: 'Biology',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Hradini Konthalapalli',
          affiliation: 'Biology',
          image: 'https://lh3.google.com/u/0/d/1yz_-y9fIgMRAIdQ5rLuuu9esU0MB7vjX=w1366-h767-iv1'
        },
        {
          name: 'Nisarg Vyas',
          affiliation: 'Physics',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Prem Nigam',
          affiliation: 'Mathematics',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Ayush Singh',
          affiliation: 'Computer Sci.',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Abhishek Anil Deshmukh',
          affiliation: 'Web Developer',
          image: 'https://deshmukh.ml/images/popitalk_dp.jpg'
        },
        {
          name: 'Jyotirmay Shivottam',
          affiliation: 'Web Developer',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Jyotish',
          affiliation: 'Robotics',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Smruthimedha Prida',
          affiliation: 'Design',
          image: 'https://lh3.google.com/u/0/d/10aaZmuyZbHzPRLq6S0C9NcZJNoqELmb-=w745-h658-iv2'
        },
        {
          name: 'Anoushka Sardar',
          affiliation: 'Logistics',
          image: 'https://lh3.google.com/u/0/d/1sTCHiXJZEHemtF1tciGjFAmDcgEs3_CT=w745-h670-iv1'
        },
        {
          name: 'Anshuman Padhi',
          affiliation: 'Logistics',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Tanya Pattnaik',
          affiliation: 'Volunteer\'s Coordinator',
          image: 'https://lh3.google.com/u/0/d/1pK3n4smvb5FUuoxUXgzznvbYOjeXQVL1=w745-h670-iv2'
        },
      ],
      organisers2019: [
        {
          name: 'Pankaj Kumar',
          affiliation: 'Overall',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Tanmay Pani',
          affiliation: 'Overall',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Pushpa Raj Prasaf',
          affiliation: 'Chemistry',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Prakhar Gupta',
          affiliation: 'Chemistry',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Srilakshmi',
          affiliation: 'Biology',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Saurabh Agarwal',
          affiliation: 'Biology',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Akshay Priyadarshani',
          affiliation: 'Physics, Design',
          image: 'https://lh3.googleusercontent.com/fife/ABSRlIpFpSkVMGxQmu6xEF_GsHDHnsiwy9nfPjrJ01UmEgdoGfsXOhccIQ6fAcj9Zs4cgX3LHIXhbQebrraPcWRIpk6YJAivO_BV4J0mdfEdsbGT9BqnQPY77cYAdJbuBklcGiNc69rMnnkJQxay2DQIXN_lZi0kqfPsjyHJok7U9XtHPfcZQdERKEPDWGMNkro-ygF6fvqUuUIc0HYJR4tHyltiOID-hdByAcnagf83yEQBrXzIw2eMmcnejMduZd9wHoJJgxZpzlydFwpRTRQZuOyqty8831s1EFHGaA98GdiHj-XPP_SjFpHjkR8V15yKkgkqtZ_Q9fPVzEBbRPDGAT_GzzxhwMlzxx1_MwNVdYpAn-u_m8DfIc02bOyOmkgvIIxQK3Q78yqQb1UE2TRSD-fNB5Nyibme3P3AwTM4uOKyB_-dzx1V0MGt93ueSgk3LsNpti5fO20bZkFyJa-o_tLtKGRUYA4utC354Q_NVdp6HWAXz3FcUZzeEhJ8oITSlVaAMbR3zlBcu5yXNvxfSj-vksR9nQlWEROT-_HSUpTmj4cksGbqLl9TGaqpUkkg1lCCQDHLbb6YxxwspSROZaUJWAxyntAglGlPzCaT90496hC2uwC_waUFBx8rBwF8A3RIsVGwARlFweUDZfMOzYHVr7luDnur4I2FQhR6BpzQSUmNDQi88-nqSyXB8EZFvfiuX0Zwo-i0MIvexkw3Ltu3woE=w1360-h670-ft'
        },
        {
          name: 'Dishant Swain',
          affiliation: 'Physics',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Paresh Singh Arora',
          affiliation: 'Mathematics',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Sannidhya Shukla',
          affiliation: 'Computer Sci.',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Aranya Giri',
          affiliation: 'Food',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Arnav Paul',
          affiliation: 'Food',
          image: 'https://lh3.google.com/u/0/d/17PVM_MWrh3JTVMdzw2BJcDzLNAlpZQpc=w745-h670-iv2'
        },
        {
          name: 'Smrutimedha Prida',
          affiliation: 'Invite and design',
          image: 'https://via.placeholder.com/150'
        },
      ],
      organiser2018: {
        name: 'Biprateep Dey',
        affiliation: '2018 Chief Organiser',
        image: 'https://via.placeholder.com/150'
      },
      organiser2017: {
        name: 'Diptanil Roy',
        affiliation: '2017 Chief Organiser',
        image: 'https://via.placeholder.com/150'
      },
      organisers2016: [
      {
        name: 'Bipradeep Dey',
        affiliation: '2016 Chief Organiser',
        image: 'https://via.placeholder.com/150'
      },
        {
        name: 'Debashish Jena',
        affiliation: '2016 Chief Organiser',
        image: 'https://via.placeholder.com/150'
        }]
    }
  }
};
</script>
<style scoped lang="scss">
section {
  padding: 2vh 3vw;
}
</style>
