<template>
    <div class="wrapper-stepper">
        <div class="stepper">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress "></div>
            </div>

            <div class="stepper-item" :class="{ 'current': step === item, 'success': step > item }" v-for="item in 3" :key="item">
                <div class="stepper-item-counter">
                    <img class="icon-success" src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png" alt="">
                    <span class="number">
                        {{ item }}
                    </span>
                </div>
                <span class="stepper-item-title">
                    Step {{ item }}
                </span>
            </div>
        </div>

        <div class="stepper-content">
            <div class="stepper-pane">
                <div v-if="step === 1" class="flex justify-center items-center h-full">
                <span class="tx-green-1">
                    Welcome to Invoice!
                    <div class="mt-2">
                        <AppIcon class="mr-4" icon-name="invoice">
                            <IconInvoice :width="20" :height="20"/> 
                         </AppIcon> 
                    </div>
                    <span class="mt-4 block">
                        Click on the Next button to proceed to fill in the data 
                    of the form for the invoice.
                    </span>
                </span>
                </div>
                <div v-if="step === 2" >
                    <div>Fill Invoice </div>
                    <div class="flex justify-around px-[30px] pt-[30px]">
                        <div class="">
                            <div class="input-group">
                                <input v-model="issuerName" type="text" id="issuerName" class="input-group__input" :class="{'input-group__input--error': showIssuerNameValidation}" @input="showIssuerNameValidation = false" required />
                                <label for="issuerName" class="input-group__label">Issuer Name</label>
                                <div v-if="showIssuerNameValidation" class="validation-message" >{{ issuerNameValidation }}</div>
                            </div>
                            <div class="input-group my-4">
                                <input v-model="invoiceNumber" type="text" id="invoiceNumber" class="input-group__input" :class="{'input-group__input--error': showInvoiceNumberValidation}" @input="showInvoiceNumberValidation = false" required/>
                                <label for="invoiceNumber" class="input-group__label">Invoice Number</label>
                                <div v-if="showInvoiceNumberValidation" class="validation-message">{{ invoiceNumberValidation }}</div>
                            </div>
                            <div class="input-group">
                                <select v-model="currency" id="currency" class="input-group__input w-full" :class="{'input-group__input--error': showCurrencyValidation}"  @change="showCurrencyValidation = false" required>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                </select>
                                <label for="currency" class="input-group__label">Currency</label>
                                <div v-if="showCurrencyValidation" class="validation-message">{{ currencyValidation }}</div>
                            </div>
                            <div class="input-group mt-4">
                                <input v-model="totalAmount" type="text" id="totalAmount" class="input-group__input" :class="{'input-group__input--error': showTotalAmountValidation}"  @input="showTotalAmountValidation = false" required/>
                                <label for="totalAmount" class="input-group__label">Total Amount</label>
                                <div v-if="showTotalAmountValidation" class="validation-message" >{{ totalAmountValidation }}</div>
                            </div>
                        </div>
                        <div class="">
                            <div class="input-group mb-4">
                                <input v-model="country" type="text" id="country" class="input-group__input" :class="{'input-group__input--error': showCountryValidation}" @input="showCountryValidation = false" required/>
                                <label for="country" class="input-group__label">Country</label>
                                <div v-if="showCountryValidation" class="validation-message" >{{ countryValidation }}</div>
                            </div>
                            <div class="input-group b">
                                <input v-model="vatNumber" type="text" id="vatNumber" class="input-group__input" :class="{'input-group__input--error': showVatNumberValidation}"  @input="showVatNumberValidation = false" required/>
                                <label for="vatNumber" class="input-group__label">VAT Number</label>
                                <div v-if="showVatNumberValidation" class="validation-message">{{ vatNumberValidation }}</div>
                            </div>
                            <div class="input-group mt-4">
                                <input v-model="issueDate" type="date" id="issueDate" class="input-group__input w-full" :class="{'input-group__input--error': showIssueDateValidation}"  @input="showIssueDateValidation = false" required/>
                                <label for="issueDate" class="input-group__label">Issue Date</label>
                                <div v-if="showIssueDateValidation" class="validation-message" >{{ issueDateValidation }}</div>
                            </div>
                            <div class="input-group my-4">
                                <input v-model="dueDate" type="date" id="dueDate" class="input-group__input w-full" :class="{'input-group__input--error': showDueDateValidation}"  @input="showDueDateValidation = false" required/>
                                <label for="dueDate" class="input-group__label">Due Date</label>
                                <div v-if="showDueDateValidation" class="validation-message" >{{ dueDateValidation }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-4">
                        <input type="file" id="pdfFile" class="input-group__input" :class="{'input-group__input--error': showPdfFileValidation}" accept=".pdf" @change="handleFileChange" required/>
                        <div v-if="showPdfFileValidation" class="validation-message" >{{ pdfFileValidation }}</div>
                    </div>
                </div>
                <div v-if="step === 3" >
                    <div>Result Summary</div>
                    <div class="flex justify-around px-[30px] pt-[30px]">
                        <div class="">
                            <div class="flex items-center py-4">
                                <span>Issuer Name: </span>
                                <span class="ml-4">{{ issuerName }}</span>
                            </div>
                            <div class="flex items-center">
                                <span>Invoice Number: </span>
                                <span class="ml-4">{{ invoiceNumber }}</span>
                            </div>
                            <div class="flex items-center py-4">
                                <span>Currency: </span>
                                <span class="ml-4"> {{ currency }}</span>
                            </div>
                            <div class="flex items-center pb-4">
                                <span>Total Amount: </span>
                                <span class="ml-4">{{ totalAmount }}</span>
                            </div>
                        </div>
                        <div class="">
                            <div class="flex items-center py-4">
                                <span>Country: </span>
                                <span class="ml-4">{{ country }}</span>
                            </div>
                            <div class="flex items-center">
                                <span>Vat Number: </span>
                                <span class="ml-4">{{ vatNumber }}</span>
                            </div>
                            <div class="flex items-center py-4">
                                <span>Issue Date: </span>
                                <span class="ml-4">{{ issueDate }}</span>
                            </div>
                            <div class="flex items-center">
                                <span>Due Date: </span>
                                <span class="ml-4">{{ dueDate }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center py-4">
                        <span>File: </span>
                        <span>{{ pdfFile }}</span>
                    </div>
                    <div class="flex justify-center items-center py-4">
                    <template v-if="!isUploading">
                        <AppButton class="btn--green" @custom-click="Upload">
                        Upload
                        </AppButton>
                    </template>
                    <template v-else>
                        <span>Uploading...</span>
                    </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="controls">
            <AppButton :isDisabled="step === 1" @custom-click="validateAndBack">
                {{ back }}
            </AppButton> 
            <AppButton bgColorText="btn--green-1" :isDisabled="step === 3 || (step === 2 && hasValidationMessages)" @custom-click="validateAndNext">
                 {{ next }}
            </AppButton>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from "vue";
import AppButton from "../components/AppButton.vue"
import AppIcon from './AppIcon.vue'
import IconInvoice from '../components/icons/IconInvoice.vue'

  const step = ref(1);
  const back = ref('Back');
  const next = ref('Next');

// Campos de entrada
const issuerName = ref("");
const invoiceNumber = ref("");
const currency = ref("");
const totalAmount = ref(null);
const country = ref("");
const vatNumber = ref("");
const issueDate = ref(null);
const dueDate = ref(null);
const pdfFile = ref(null);


// Mensajes de validación
const issuerNameValidation = ref("");
const invoiceNumberValidation = ref("");
const currencyValidation = ref("");
const totalAmountValidation = ref("");
const countryValidation = ref("");
const vatNumberValidation = ref("");
const issueDateValidation = ref("");
const dueDateValidation = ref("");
const pdfFileValidation = ref("");

// Variable de estado de la validez del formulario
const isFormValid = ref(true);

const isUploading = ref(false);

// Variable para controlar la visualización de mensajes de validación
const showIssuerNameValidation = ref(false);
const showInvoiceNumberValidation = ref(false);
const showCurrencyValidation = ref(false);
const showTotalAmountValidation = ref(false);
const showCountryValidation = ref(false);
const showVatNumberValidation = ref(false);
const showIssueDateValidation = ref(false);
const showDueDateValidation = ref(false);
const showPdfFileValidation= ref(false);

// Función de validación
const validateForm = () => {
  const currentDate = new Date(); // Get the current date

    // Reset all showXValidation flags
  showIssuerNameValidation.value = false;
  showInvoiceNumberValidation.value = false;
  showCurrencyValidation.value = false;
  showTotalAmountValidation.value = false;
  showCountryValidation.value = false;
  showVatNumberValidation.value = false;
  showIssueDateValidation.value = false;
  showDueDateValidation.value = false;
  showPdfFileValidation.value = false;

   // Validate and set flags for each field
   if (!issuerName.value) {
    issuerNameValidation.value = "Issuer Name is required";
    showIssuerNameValidation.value = true;
  }
  
  if (!invoiceNumber.value) {
    invoiceNumberValidation.value = "Invoice Number is required";
    showInvoiceNumberValidation.value = true;
  }
  
  if (!currency.value) {
    currencyValidation.value = "Currency is required";
    showCurrencyValidation.value = true;
  }

  if (!totalAmount.value) {
    totalAmountValidation.value = "Total Amount is required";
    showTotalAmountValidation.value = true;
  } else if (!/^\d+\.\d{2}$/.test(totalAmount.value)) {
    totalAmountValidation.value = "Amount format will be 0.00";
    showTotalAmountValidation.value = true;
  } else {
      totalAmountValidation.value = "";
    }

  if (!country.value) {
    countryValidation.value = "Country is required";
    showCountryValidation.value = true;
  } else if (!/^[A-Z]{2}$/.test(country.value)) {
      showCountryValidation.value = true;
      countryValidation.value = "Country will be 2 digits UpperCase";
  } else {
      countryValidation.value = "";
    }

  if(!country.value) {
    countryValidation.value = "Country is required";
    showCountryValidation.value = true;
  }

  if(!vatNumber.value) {
    vatNumberValidation.value = "Vat Number is required";
    showVatNumberValidation.value = true;
  }

  if (!dueDate.value) {
    dueDateValidation.value = "Due Date is required";
    showDueDateValidation.value = true;
  } else {
      const selectedDueDate = new Date(dueDate.value);
      if (selectedDueDate < currentDate) {
          dueDateValidation.value = "Due Date can't be earlier than today";
          showDueDateValidation.value = true;
      } else {
            dueDateValidation.value = "";
      }
   }

  if (!issueDate.value) {
    issueDateValidation.value = "Issue Date is required";
    showIssueDateValidation.value = true;
  } else {
      const selectedIssueDate = new Date(issueDate.value);
      if (selectedIssueDate > currentDate) {
          issueDateValidation.value = "Issue Date can't be later than today";
          showIssueDateValidation.value = true;
      } else {
            issueDateValidation.value = "";
      }
   }
  
  if (!pdfFile.value) {
    pdfFileValidation.value = "File is required";
    showPdfFileValidation.value = true;
  }

  // Verifica si hay algún error de validación

  isFormValid.value =
    !!issuerName.value &&
    !!invoiceNumber.value && !!currency.value && !!totalAmount.value &&
    !!country.value && !!vatNumber.value && !!issueDate.value &&
    !!dueDate.value && !!pdfFile.value && !issueDateValidation.value && !dueDateValidation.value &&
    !countryValidation.value && !totalAmountValidation.value
};


  const stepperProgress = computed((): string => {
    return ( 100 / 3 ) * ( step.value - 1 ) + '%'
});

// Verifica si hay mensajes de validación en los campos
const hasValidationMessages = computed(() => {
  return (
    showIssuerNameValidation.value ||
    showInvoiceNumberValidation.value || showCurrencyValidation.value || showTotalAmountValidation.value ||
    showCountryValidation.value || showVatNumberValidation.value || showIssueDateValidation.value ||
    showDueDateValidation.value || showPdfFileValidation.value
  );
});

const handleFileChange = (event: any) => {
  // Aquí puedes realizar las validaciones necesarias
  pdfFile.value = event.target.files[0].name
  if (!pdfFile.value) {
    showPdfFileValidation.value = true;
    pdfFileValidation.value = "Please select a file";
  } else {
    showPdfFileValidation.value = false;
    pdfFileValidation.value = "";
  }
};

// Validación y avance al siguiente paso
const validateAndNext = () => {
  if (step.value === 2) {
    validateForm();
  }
  if (isFormValid.value) {
    step.value++;
  }
};

// Validación y avance al siguiente paso
const validateAndBack= () => {
    step.value--
  if (step.value === 1) {
    isFormValid.value = true
    pdfFile.value = null
    showPdfFileValidation.value = true
    pdfFileValidation.value = 'File is required'
  } else if (step.value === 2) {
    pdfFile.value = null
    showPdfFileValidation.value = true
    pdfFileValidation.value = 'File is required'
    validateForm();
  }
};

const fakeApiUpload = (data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.8; // Simula éxito en un 80% de las veces
      if (isSuccess) {
        resolve({ message: "Upload successful!" });
      } else {
        reject({ error: "Upload failed." });
      }
    }, 2000); // Simula una respuesta después de 2 segundos
  });
};

const Upload = () => {
    if (isFormValid.value) {
    isUploading.value = true;
    // Crear un objeto con los datos a enviar
    const dataToSend = {
      issuerName: issuerName.value,
      invoiceNumber: invoiceNumber.value,
      currency: currency.value,
      totalAmount: totalAmount.value,
      country: country.value,
      vatNumber: vatNumber.value,
      issueDate: issueDate.value,
      dueDate: dueDate.value,
      pdfFile: pdfFile.value,
    };
    fakeApiUpload(dataToSend)
    .then(() => { //response for real api
        // Simulación exitosa
        isUploading.value = false;
    })
    .catch((error) => {
        // Simulación de error
        isUploading.value = false;
        console.error("Upload error:", error);
    });
  }
};

</script>
  
<style lang="scss" scoped>
$default    :   #C5C5C5;
$green-1    :   #75CC65;
$transiton  :   all 500ms ease;

body{
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
    color: #ffffff;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
}

.tx-green-1{
    color:  $green-1;
    font-weight: 600;
}

.validation-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}

.wrapper-stepper{
    background-color: #fff;
    padding: 60px;
    border-radius: 32px;
    box-shadow: rgba($color: #000000, $alpha: 0.09);
}

.stepper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 660px;
    position: relative;
    z-index: 0;
    margin-bottom: 24px;

    &-progress{
        position: absolute;
        background-color: $default;
        height: 2px;
        z-index: -1;
        left: 0;
        right: 0;
        margin: 0 auto;

        &-bar{
            position: absolute;
            left: 0;
            height: 100%;
            width: 0%;
            background-color: $green-1;
            transition: $transiton;
        }
    }
}

.stepper-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $default;
    transition: $transiton;

    &-counter{
        height: 68px;
        width: 68px;
        display: grid;
        place-items: center;
        background-color: #fff;
        border-radius: 100%;
        border: 2px solid $default;
        position: relative;

        .icon-success{
            position: absolute;
            opacity: 0;
            transform: scale(0);
            width: 24px;
            transition: $transiton;
        }

        .number{
            font-size: 22px;
            transition: $transiton;
        }
    }

    &-title{
        position: absolute;
        font-size: 14px;
        bottom: -24px;
    }
}

.stepper-item.success{
    .stepper-item-counter{
        border-color: $green-1;
        background-color: #c8ebc1;
        color: #fff;
        font-weight: 600;

        .icon-success{
            opacity: 1;
            transform: scale(1);
        }

        .number{
            opacity: 0;
            transform: scale(0);
        }
    }

    .stepper-item-title{
        color: $green-1;
    }
}

.stepper-item.current{
    .stepper-item-counter{
        border-color: $green-1;
        background-color: $green-1;
        color: #fff;
        font-weight: 600;
    }

    .stepper-item-title{
        color: #818181;
    }
}

.stepper-pane{
    color: #333;
    text-align: center;
    height: 400px;
    box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09);
    margin: 40px 0;
}

.controls{
    display: flex;
}


/* inputs */

.input-group {
  position: relative;
}

.input-group__input:focus {
  outline-color: #3c50eb;
}

.input-group__input {
  font: inherit;
  color: #5555;
  padding: 5px;
  border: none;
  border-radius: 4px;
  outline: 2px solid #5555;
  background-color: transparent;
  transition: outline-color 500ms;
  &--error {
    outline: 2px solid red ;
  }
}

.input-group__label {
  position: absolute;
  top: 5px;
  left: 35px;
  color: #5555;
  transition: transform 500ms, background-color 500ms, padding 500ms;
  pointer-events: none;
}

.input-group__input:focus + .input-group__label,
.input-group__input:valid + .input-group__label {
  transform: translate(-5px, -18px) scale(0.8);
  background-color: #fff;
  padding-inline: 5px;
}

.input-group__input[type="date"] + .input-group__label {
  transform: translate(-5px, -18px) scale(0.8);
  background-color: #fff;
  padding-inline: 5px;
}
  </style>