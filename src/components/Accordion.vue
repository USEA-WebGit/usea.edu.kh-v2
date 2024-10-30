<template>
    <div class="accordion">
      <div 
        v-for="(item, index) in accordionItems" 
        :key="index" 
        class="accordion-item" 
        :class="{ active: activeIndex === index }" 
        @click="toggleAccordion(index)"
      >
        <div class="accordion-header">{{ item.title }}</div>
        <div class="accordion-content">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  

  <script setup>
  import { ref } from 'vue';
  
  const activeIndex = ref(null);
  const accordionItems = [
    {
      title: "Recording Financial Transactions (FA1)",
      content: "This course introduces recording financial information to the trial balance. It also covers banking procedures and reconciling cast records. The skills to be acquired include maintaining a cash book, preparing a bank reconciliation and recording sales and purchases."
    },
    {
      title: "Management Information (MA1)",
      content: "This course introduces basic techniques and cost classification. It cultivates the skills of accounting for materials, accounting for labor and product costs, and presenting information in spreadsheets."
    },
    {
      title: "Maintaining Financial Records (FA2)",
      content: "This course focuses on the double-entry system, processing and reporting business transactions, fixed. The skills to acquire include preparing ledger accounts and a trial balance; recording receivables, payables, and provisions; and recording inventory and non-current assets."
    },
    {
      title: "Managing Cost and Finances (MA2)",
      content: "This course covers costing techniques, recording costs and continuing to management decision making. It develops certain skills, such as absorption costing, marginal costing, process costing, service costing, and cash budgets."
    },
    {
      title: "Financial Accounting (FFA)",
      content: "Students learn how to prepare financial statements: income statements and balance sheets. The skills include preparing balance sheets and income statements and correcting accounting errors."
    },
    {
      title: "Management Accounting (FMA)",
      content: "This course reviews costing techniques, budgeting, standard costing, and variance analysis. It cultivates certain skills, including budget preparation, control, and reporting and standard costing and variance analysis."
    },
    {
      title: "Business and Technology (FBT)",
      content: "This course covers the functions of business, particularly managing people and business strategy. The acquired skills include motivating individuals and teams and principles of business strategy."
    },
    {
      title: "Foundation in Audit (FAU)",
      content: "This course covers the purpose of audit, of the auditor, process of an audit of financial statements, audit planning and evaluating internal controls. It cultivates such skills as testing internal controls, audit planning and risk assessment, audit procedures, documentation and reports."
    },
    {
      title: "Foundation in Financial Management (FFM)",
      content: "This course introduces cash management, investment, investment decisions, and managing trade credits. The skills for acquisition include cash budgeting and forecasting, working capital management, and investment appraisal."
    }
  ];
  
  const toggleAccordion = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  };
  </script>
  

  <style scoped>
  .accordion {
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
  }
  .accordion-item {
    border-bottom: 1px solid gray;
  }
  .accordion-header {
    position: relative;
    background-color: #8EC5FC;
    background-image: linear-gradient(80deg, #8EC5FC 100%, #002060 0%);
    cursor: pointer;
    padding: 15px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
    border-radius: 10px;
  }
  .accordion-header::before {
    content: '+';
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  .accordion-header:hover {
    opacity: 0.9;
  }
  .accordion-item.active .accordion-content {
    max-height: 300px;
  }
  .accordion-item.active .accordion-header::before {
    content: '-';
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding-left: 15px;
    padding-right: 15px;
  }
  .accordion-content p {
    margin: 15px 0;
  }
  </style>
  