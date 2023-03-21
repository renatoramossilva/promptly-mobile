class ClinicalTrial {
  constructor(data) {
    this.id = data.clinical_trial.id;
    this.pdid = data.patient_disease.id;
    this.agreed = data.agreed;
    this.title = data.clinical_trial.display;
    this.logo = data.clinical_trial.logo;
    this.htmlContent = data.clinical_trial.html;
    this.downloadUrl = data.download_url;
    this.institution = data.patient_disease.institution.short_name;
    this.diseaseName = data.patient_disease.disease.name;
  }
}

export default ClinicalTrial;
