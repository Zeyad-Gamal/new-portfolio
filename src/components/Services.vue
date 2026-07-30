<script scoped>
export default {
  data() {
    return {
      services: [
        {
  icon: 'fa-solid fa-layer-group',
  title: 'Full-Stack Web Applications',
  description: 'End-to-end web application development combining responsive frontends with robust backend architectures and databases.',
  tags: ['Vue.js', 'Laravel', 'Node.js', 'REST APIs', 'MySQL']
},
        {
          icon: 'fa-solid fa-server',
          title: 'Backend & API Architecture',
          description: 'Designing high-performance, scalable backend systems and RESTful APIs tailored for low latency and high availability.',
          tags: ['Laravel', 'Node.js', 'Express', 'REST APIs']
        },
        {
          icon: 'fa-solid fa-cloud',
          title: 'Cloud Infrastructure & DevOps',
          description: 'End-to-end automation of cloud environments on AWS, utilizing IaC, containerization, and automated CI/CD pipelines.',
          tags: ['AWS', 'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Jenkins']
        },
        {
          icon: 'fa-solid fa-chart-line',
          title: 'Real-time & Distributed Systems',
          description: 'Building real-time telemetry streaming platforms, monitoring solutions, and observability dashboards.',
          tags: ['WebSockets', 'Prometheus', 'Grafana', 'Log Analysis']
        },
        {
          icon: 'fa-solid fa-database',
          title: 'Microservices & Database Design',
          description: 'Structuring robust microservices architectures and database models optimized for complex data processing and security.',
          tags: ['Microservices', 'MySQL', 'PostgreSQL', 'Data Modeling']
        },
        {
          icon: 'fa-solid fa-gears',
          title: 'Deployment & System Automation',
          description: 'Cloud hosting, server configuration, automated deployment pipelines, and zero-downtime maintenance.',
          tags: ['CI/CD', 'Linux', 'Server Config', 'Automation']
        }
      ]
    };
  }
};
</script>

<template>
  <section class="main-section" style="width: 100% !important;">
    <div class="services" id="services" style="width: 100%;">
      <h1 id="title-pag3" class="heading-title address-title" style="color: whitesmoke">
        Services
      </h1>
      <p class="section-title">
        Here are the specialized backend and DevOps solutions I provide
      </p>
      <hr style="color: aliceblue" />

      <section class="services-container">
        <div class="box-container">
          <div class="box" v-for="service in services" :key="service.title">
            <i><FontAwesomeIcon class="icon" :icon="service.icon" /></i>
            <h3>{{ service.title }}</h3>
            <p class="service-desc">{{ service.description }}</p>
            
            <div class="tags-container">
              <span v-for="tag in service.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.services .box-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.services .services-container .box-container .box {
  padding: 2.5rem 2rem;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(244, 113, 5, 0.4) 6%,
    rgba(244, 113, 5, 0.6) 90%
  );
  cursor: pointer;
  flex: 1 1 22rem; /* كبرت الحجم الأدنى شوية عشان الكروت تشيل الداتا بانسجام */
  border-radius: 2rem;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow);
}

.services .services-container .box-container .box:hover {
  background: rgba(116, 124, 134, 0.8);
  transform: translateY(-5px);
}

.services-container .box-container .box i {
  color: whitesmoke;
  font-size: 4.5rem; /* صغرت الأيقونة سنة بسيطة عشان المساحة للـ Text */
  margin-bottom: 1rem;
}

.services-container .box-container .box h3 {
  color: var(--white);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.service-desc {
  color: #f0f0f0;
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

/* 🏷️ Styling للـ Tech Tags الجداد */
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: auto;
}

.tag {
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 0.85rem;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 500;
  letter-spacing: 0.5px;
}

.services .services-container .box-container .box:hover .tag {
  background: rgba(244, 113, 5, 0.8);
  border-color: transparent;
}
</style>