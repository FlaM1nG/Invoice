<template>
  <AppStepper :step="step" :totalStep="3">
    <div v-if="step === 1" class="flex justify-center items-center h-full">
      <span class="text-black font-semibold text-xl">
        {{ $t('invoiceview.welcome') }}
          <div class="mt-2">
              <AppIcon class="mr-4" icon-name="invoice">
                  <IconInvoice :width="20" :height="20"/> 
                </AppIcon> 
          </div>
          <span class="mt-4 block text-sm">
            {{ $t('invoiceview.welcomeTitle') }}
          </span>
      </span>
    </div>
    <div v-if="step === 2" >
      <div class="font-semibold">{{ $t('invoiceview.fillInvoice') }}</div>
        <div class="flex justify-around px-[30px] pt-[30px]">
          <div class="">
              <div class="input-group">
                  <input v-model="issuerName" type="text" id="issuerName" class="input-group__input" :class="{'input-group__input--error': showIssuerNameValidation}" @input="showIssuerNameValidation = false" required />
                  <label for="issuerName" class="input-group__label">{{ $t('invoiceview.issueName') }}</label>
                  <div v-if="showIssuerNameValidation" class="validation-message" >{{ issuerNameValidation }}</div>
              </div>
              <div class="input-group my-4">
                  <input v-model="invoiceNumber" type="text" id="invoiceNumber" class="input-group__input" :class="{'input-group__input--error': showInvoiceNumberValidation}" @input="showInvoiceNumberValidation = false" required/>
                  <label for="invoiceNumber" class="input-group__label">{{ $t('invoiceview.invoiceNumber') }}</label>
                  <div v-if="showInvoiceNumberValidation" class="validation-message">{{ invoiceNumberValidation }}</div>
              </div>
              <div class="input-group">
                  <select v-model="currency" id="currency" class="input-group__input w-full" :class="{'input-group__input--error': showCurrencyValidation}"  @change="showCurrencyValidation = false" required>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                  </select>
                  <label for="currency" class="input-group__label">{{ $t('invoiceview.currency') }}</label>
                  <div v-if="showCurrencyValidation" class="validation-message">{{ currencyValidation }}</div>
              </div>
              <div class="input-group mt-4">
                  <input v-model="totalAmount" type="text" id="totalAmount" class="input-group__input" :class="{'input-group__input--error': showTotalAmountValidation}"  @input="showTotalAmountValidation = false" required/>
                  <label for="totalAmount" class="input-group__label">{{ $t('invoiceview.totalAmount') }}</label>
                  <div v-if="showTotalAmountValidation" class="validation-message" >{{ totalAmountValidation }}</div>
              </div>
          </div>
          <div class="">
              <div class="input-group mb-4">
                  <input v-model="country" type="text" id="country" class="input-group__input" :class="{'input-group__input--error': showCountryValidation}" @input="showCountryValidation = false" required/>
                  <label for="country" class="input-group__label">{{ $t('invoiceview.country') }}</label>
                  <div v-if="showCountryValidation" class="validation-message" >{{ countryValidation }}</div>
              </div>
              <div class="input-group b">
                  <input v-model="vatNumber" type="text" id="vatNumber" class="input-group__input" :class="{'input-group__input--error': showVatNumberValidation}"  @input="showVatNumberValidation = false" required/>
                  <label for="vatNumber" class="input-group__label">{{ $t('invoiceview.vatNumber') }}</label>
                  <div v-if="showVatNumberValidation" class="validation-message">{{ vatNumberValidation }}</div>
              </div>
              <div class="input-group mt-4">
                  <input v-model="issueDate" type="date" id="issueDate" class="input-group__input w-full" :class="{'input-group__input--error': showIssueDateValidation}"  @input="showIssueDateValidation = false" required/>
                  <label for="issueDate" class="input-group__label">{{ $t('invoiceview.issueDate') }}</label>
                  <div v-if="showIssueDateValidation" class="validation-message" >{{ issueDateValidation }}</div>
              </div>
              <div class="input-group my-4">
                  <input v-model="dueDate" type="date" id="dueDate" class="input-group__input w-full" :class="{'input-group__input--error': showDueDateValidation}"  @input="showDueDateValidation = false" required/>
                  <label for="dueDate" class="input-group__label">{{ $t('invoiceview.dueDate') }}</label>
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
            <div class="font-semibold">{{ $t('invoiceview.summary') }}</div>
            <div class="flex justify-around px-[30px] pt-[30px]">
                <div class="">
                    <div class="flex items-center py-4">
                        <span>{{ $t('invoiceview.issueName') }}: </span>
                        <span class="ml-4">{{ issuerName }}</span>
                    </div>
                    <div class="flex items-center">
                        <span>{{ $t('invoiceview.invoiceNumber') }}: </span>
                        <span class="ml-4">{{ invoiceNumber }}</span>
                    </div>
                    <div class="flex items-center py-4">
                        <span>{{ $t('invoiceview.currency') }}: </span>
                        <span class="ml-4"> {{ currency }}</span>
                    </div>
                    <div class="flex items-center pb-4">
                        <span>{{ $t('invoiceview.totalAmount') }}: </span>
                        <span class="ml-4">{{ totalAmount }}</span>
                    </div>
                </div>
                <div class="">
                    <div class="flex items-center py-4">
                        <span>{{ $t('invoiceview.country') }}: </span>
                        <span class="ml-4">{{ country }}</span>
                    </div>
                    <div class="flex items-center">
                        <span>{{ $t('invoiceview.vatNumber') }}: </span>
                        <span class="ml-4">{{ vatNumber }}</span>
                    </div>
                    <div class="flex items-center py-4">
                        <span>{{ $t('invoiceview.issueDate') }}: </span>
                        <span class="ml-4">{{ issueDate }}</span>
                    </div>
                    <div class="flex items-center">
                        <span>{{ $t('invoiceview.dueDate') }}: </span>
                        <span class="ml-4">{{ dueDate }}</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center py-4">
                <span>{{ $t('invoiceview.file') }}: </span>
                <span>{{ pdfFile }}</span>
            </div>
            <div class="flex justify-center items-center py-4">
            <template v-if="!isUploading">
                <AppButton class="btn--green" @custom-click="upload">
                  {{ $t('invoiceview.submit') }}
                </AppButton>
            </template>
            <AppSpinner v-else/>
            </div>
        </div>
        <template v-slot:footer>
          <AppButton :isDisabled="step === 1" @custom-click="validateAndBack">
            {{ $t('invoiceview.back') }}
            </AppButton> 
            <AppButton bgColorText="btn--green-1" :isDisabled="step === 3 || (step === 2 && hasValidationMessages)" @custom-click="validateAndNext">
              {{ $t('invoiceview.next') }}
            </AppButton>
        </template>
  </AppStepper>
  <AppNotification v-if="showNotificationComputed" :notification-message="notificationMessage" :notification-type="notificationType" :show-notification="showNotificationComputed"/>
</template>
      
<script setup lang="ts">
import { ref, computed } from 'vue';
import AppStepper from '@/components/AppStepper.vue';
import AppIcon from '@/components/AppIcon.vue'
import IconInvoice from '@/components/icons/IconInvoice.vue'
import AppNotification from '@/components/AppNotification.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import AppButton from '@/components/AppButton.vue';

import { useRouter } from 'vue-router';

type UploadResponse = { message?: string; error?: string };

interface FormDataSend {
  issuerName: string;
  invoiceNumber: string;
  currency: string;
  totalAmount: number | null;
  country: string;
  vatNumber: string;
  issueDate: string | null;
  dueDate: string | null;
  uploadedFile: File | null;
}

const router = useRouter();

const step = ref<number>(1);

const showNotification = ref<boolean>(false);
const notificationType = ref<string>('');
const notificationMessage = ref<string>('');

// input fields
const issuerName = ref<string>("");
const invoiceNumber = ref<string>("");
const currency = ref<string>("");
const totalAmount = ref(null);
const country = ref<string>("");
const vatNumber = ref<string>("");
const issueDate = ref<string | null>(null);
const dueDate = ref<string | null>(null);
const pdfFile = ref<string | null>(null);
const uploadedFile = ref<File | null>(null);

// Validation messages
const issuerNameValidation = ref<string>("");
const invoiceNumberValidation = ref<string>("");
const currencyValidation = ref<string>("");
const totalAmountValidation = ref<string>("");
const countryValidation = ref<string>("");
const vatNumberValidation = ref<string>("");
const issueDateValidation = ref<string>("");
const dueDateValidation = ref<string>("");
const pdfFileValidation = ref<string>("");

// Form validity status variable
const isFormValid = ref<boolean>(true);

// Uploading status variable
const isUploading = ref<boolean>(false);

// Variable to control the display of validation messages
const showIssuerNameValidation = ref<boolean>(false);
const showInvoiceNumberValidation = ref<boolean>(false);
const showCurrencyValidation = ref<boolean>(false);
const showTotalAmountValidation = ref<boolean>(false);
const showCountryValidation = ref<boolean>(false);
const showVatNumberValidation = ref<boolean>(false);
const showIssueDateValidation = ref<boolean>(false);
const showDueDateValidation = ref<boolean>(false);
const showPdfFileValidation= ref<boolean>(false);

const showNotificationComputed = computed<boolean>(() => {
  return showNotification.value;
});

const hide = (): void => {
  showNotification.value = false;
};

const generateNotification = (type: string, message: string): void => {
  showNotification.value = true;
  notificationType.value = type;
  notificationMessage.value = message;
  setTimeout(() => { hide() }, 3000);
};

// Validation function
const validateForm = (): void => {
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
  
  if(!vatNumber.value) {
    vatNumberValidation.value = "Vat Number is required";
    showVatNumberValidation.value = true;
  } else if (!/^(GB)?[A-Za-z]?\d{8,10}[A-Za-z]?$/.test(vatNumber.value)) {
      vatNumberValidation.value = "Invalid VAT Number format";
      showVatNumberValidation.value = true;
  } else {
      vatNumberValidation.value = ""
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

  // Check if there are any validation errors
  isFormValid.value =
    !!issuerName.value &&
    !!invoiceNumber.value && !!currency.value && !!totalAmount.value &&
    !!country.value && !!vatNumber.value && !!issueDate.value &&
    !!dueDate.value && !!pdfFile.value && !issueDateValidation.value && !dueDateValidation.value &&
    !countryValidation.value && !totalAmountValidation.value && !vatNumberValidation.value
};

// Check if there are validation messages in the fields
const hasValidationMessages = computed<boolean>(() => {
  return (
    showIssuerNameValidation.value ||
    showInvoiceNumberValidation.value || showCurrencyValidation.value || showTotalAmountValidation.value ||
    showCountryValidation.value || showVatNumberValidation.value || showIssueDateValidation.value ||
    showDueDateValidation.value || showPdfFileValidation.value
  );
});

const handleFileChange = (event: Event): void => {
  const inputElement = event.target as HTMLInputElement;
  const { files } = inputElement;
  uploadedFile.value = files && files.length ? files[0] : null;
  pdfFile.value = files && files.length ? files[0].name : null;
  showPdfFileValidation.value = !pdfFile.value;
  pdfFileValidation.value = showPdfFileValidation.value ? "Please select a file" : "";
};

const resetPdfFileValidation = (): void => {
  pdfFile.value = null;
  uploadedFile.value = null;
  showPdfFileValidation.value = true;
  pdfFileValidation.value = 'File is required';
};

// Validation function back button
const validateAndBack = (): void => {
  step.value--;
  if (step.value === 1) {
    isFormValid.value = true;
    resetPdfFileValidation();
  } else if (step.value === 2) {
    resetPdfFileValidation();
    validateForm();
  }
};

// Validation function next button
const validateAndNext = (): void => {
  if (step.value === 2) {
    validateForm();
  }
  if (isFormValid.value) {
    step.value++;
  }
};

const fakeApiUpload = (_data: FormDataSend): Promise<UploadResponse> => { //data send to fake Api
  return new Promise<UploadResponse>((resolve, reject) => {
    setTimeout(() => {
      // 80% success - 20% Error
      const isSuccess = Math.random() < 0.8;
      isSuccess ? resolve({ message: "Upload successful!" }) : reject({ error: "Upload failed." });
    }, 2000);
  });
};

const upload = async (): Promise<void> => {
  if (isFormValid.value) {
    isUploading.value = true;

    const dataToSend: FormDataSend = {
      issuerName: issuerName.value,
      invoiceNumber: invoiceNumber.value,
      currency: currency.value,
      totalAmount: totalAmount.value,
      country: country.value,
      vatNumber: vatNumber.value,
      issueDate: issueDate.value,
      dueDate: dueDate.value,
      uploadedFile: uploadedFile.value,
    };

    try {
      await fakeApiUpload(dataToSend);
      generateNotification('success', 'Upload successful!');
      isUploading.value = false;
      setTimeout(() => {
        router.push({ name: 'home' }); 
      }, 2000);
    } catch (error) {
      isUploading.value = false;
      console.error("Upload error:", error);
      generateNotification('error', 'Upload error');
    }
  }
};
</script>

<style lang="scss" scope>
.validation-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
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
  color: black;
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
  background-color: #fff;
  padding-inline: 5px;
  margin-left: -29px;
  width: 135px;
}

@media (max-width: 700px) {
  .input-group__input {
    width: 160px;
  }
}
@media (max-width: 400px) {
  .input-group__input {
    width: 160px;
    margin-left: 7px;
  }
}
</style>
