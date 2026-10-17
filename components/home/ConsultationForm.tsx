"use client";

import React, { useState } from "react";
import {
  Calendar,
  User,
  Mail,
  Phone,
  Home,
  DollarSign,
  MessageSquare,
  CheckCircle,
  Zap,
  ArrowRight,
  Wrench,
  MessageCircle,
  MapPin,
} from "lucide-react";

// Indicatif pays + numéro, sans "+" ni espaces
const WHATSAPP_NUMBER = "234XXXXXXXXXX";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  services: string[];
  urgency: string;
  propertyType: string;
  budget: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
  contactMethod: string;
}

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  services: [],
  urgency: "",
  propertyType: "",
  budget: "",
  message: "",
  preferredDate: "",
  preferredTime: "",
  contactMethod: "whatsapp",
};

const TOTAL_STEPS = 5;

const inputClass =
  "w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-neutral-900 placeholder-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-300/40 focus:outline-none transition";

const optionClass = (selected: boolean, extra = "") =>
  `rounded-xl border-2 font-semibold transition-all ${extra} ${
    selected
      ? "border-neutral-900 bg-yellow-300 text-neutral-900 shadow-md"
      : "border-gray-200 bg-white text-gray-700 hover:border-yellow-400 hover:bg-yellow-50"
  }`;

const ConsultationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const today = new Date().toISOString().split("T")[0];

  const updateFormData = (
    field: Exclude<keyof FormData, "services">,
    value: string,
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (value: string): void => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((item) => item !== value)
        : [...prev.services, value],
    }));
  };

  // Validation simple à chaque étape
  const canContinue = (): boolean => {
    switch (currentStep) {
      case 1:
        return Boolean(
          formData.firstName.trim() &&
          formData.lastName.trim() &&
          formData.email.trim() &&
          formData.phone.trim() &&
          formData.location.trim(),
        );
      case 2:
        return formData.services.length > 0 && Boolean(formData.urgency);
      case 3:
        return Boolean(formData.propertyType && formData.budget);
      case 4:
        return true;
      case 5:
        return Boolean(formData.preferredDate && formData.preferredTime);
      default:
        return false;
    }
  };

  const handleSubmit = (): void => {
    // TODO : envoyer les données du formulaire vers votre API / service e-mail
    console.log("Demande de devis envoyée :", formData);
    setSubmitted(true);
  };

  const nextStep = (): void => {
    if (currentStep < TOTAL_STEPS && canContinue()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = (): void => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const sendOnWhatsApp = (): void => {
    const lines = [
      `Bonjour, je viens de demander un devis gratuit sur votre site web.`,
      ``,
      `Nom : ${formData.firstName} ${formData.lastName}`,
      `Téléphone : ${formData.phone}`,
      `E-mail : ${formData.email}`,
      `Lieu : ${formData.location}`,
      `Services : ${formData.services.join(", ")}`,
      `Urgence : ${formData.urgency}`,
      `Bien : ${formData.propertyType}`,
      `Budget : ${formData.budget}`,
      `Visite souhaitée : ${formData.preferredDate} (${formData.preferredTime})`,
      formData.message ? `Détails : ${formData.message}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const reset = (): void => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData(initialData);
  };

  const progress = (currentStep / TOTAL_STEPS) * 100;

  /* ───────────── Écran de confirmation ───────────── */
  if (submitted) {
    return (
      <div className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-neutral-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
                Merci !
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Votre demande de devis a bien été reçue. L’un de nos
                électriciens l’examinera et vous contactera dans les 24 heures.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-neutral-900 mb-3">
                  Prochaines étapes
                </h3>
                <div className="space-y-2 text-left text-neutral-800">
                  <p>Nous examinons les détails de votre demande</p>
                  <p>Un électricien certifié est affecté à votre projet</p>
                  <p>Nous vous contactons pour confirmer la visite</p>
                  <p>Vous recevez un devis clair et détaillé</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={sendOnWhatsApp}
                  className="inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-950/90 text-yellow-300 px-5 py-3.5 rounded-xl font-bold transition-colors"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="relative h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.003 3C8.83 3 3 8.83 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.72A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16.003 3Zm0 23.7c-1.95 0-3.86-.52-5.53-1.5l-.4-.23-3.98 1.02 1.06-3.88-.26-.4A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16 21.9 26.7 16.003 26.7Zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.32.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z" />
                  </svg>
                  Envoyer les détails sur WhatsApp
                </button>
                <button
                  onClick={reset}
                  className="border-2 border-blue950bg-blue-950 text-blue950bg-blue-950 hover:bg-yellow-300 px-5 py-3.5 rounded-xl font-bold transition-colors"
                >
                  Demander un autre devis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ───────────── Formulaire ───────────── */
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Titre */}
          <div className="flex flex-col items-start text-left mb-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-blue-950 leading-[1.1] mb-4">
              Donnons vie à{" "}
              <span className="bg-yellow-300 px-2 rounded-md inline-block">
                votre projet
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl">
              Dites-nous ce dont vous avez besoin et obtenez un devis gratuit de
              nos électriciens certifiés
            </p>
          </div>

          {/* Progression */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm font-semibold text-slate-600">
              <span>
                Étape {currentStep} sur {TOTAL_STEPS}
              </span>
              <span>{Math.round(progress)} % terminé</span>
            </div>
            <div className="h-3 bg-neutral-900/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-300 border-r-2 border-neutral-900 transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8">
            {/* Étape 1 : Contact */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    Vos coordonnées
                  </h3>
                  <p className="text-slate-600">
                    Comment pouvons-nous vous joindre ?
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        updateFormData("firstName", e.target.value)
                      }
                      className={inputClass}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        updateFormData("lastName", e.target.value)
                      }
                      className={inputClass}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse e-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className={`${inputClass} pl-12`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Numéro de téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          updateFormData("phone", e.target.value)
                        }
                        className={`${inputClass} pl-12`}
                        placeholder="+32 4XX XX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Lieu de l’intervention *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          updateFormData("location", e.target.value)
                        }
                        className={`${inputClass} pl-12`}
                        placeholder="Ixelles, Bruxelles"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Étape 2 : Services et urgence */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    De quoi avez-vous besoin ?
                  </h3>
                  <p className="text-slate-600">
                    Sélectionnez toutes les options concernées
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Services *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Câblage de maison",
                      "Mise à niveau du tableau électrique",
                      "Éclairage",
                      "Solaire et onduleur",
                      "Diagnostic de panne",
                      "Réparation d’urgence",
                      "Prises et interrupteurs",
                      "Travaux commerciaux",
                      "Autre",
                    ].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={optionClass(
                          formData.services.includes(service),
                          "p-3 md:p-4 text-sm md:text-base",
                        )}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Quel est le niveau d’urgence ? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Urgence",
                      "Cette semaine",
                      "Ce mois-ci",
                      "Simplement en projet",
                    ].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => updateFormData("urgency", time)}
                        className={optionClass(
                          formData.urgency === time,
                          "p-3 md:p-4 text-sm md:text-base",
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Étape 3 : Bien et budget */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    Bien et budget
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Type de bien *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Maison",
                      "Appartement",
                      "Magasin / commerce",
                      "Bureau",
                      "Industriel",
                      "Autre",
                    ].map((property) => (
                      <button
                        key={property}
                        type="button"
                        onClick={() => updateFormData("propertyType", property)}
                        className={optionClass(
                          formData.propertyType === property,
                          "p-3 md:p-4 text-sm md:text-base",
                        )}
                      >
                        {property}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-1 text-sm font-semibold text-gray-700 mb-3">
                    <DollarSign className="w-4 h-4" />
                    Budget estimé *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Moins de 100 $",
                      "$100 - $500",
                      "$500 - $2,000",
                      "$2,000+",
                      "Pas encore sûr",
                    ].map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => updateFormData("budget", budget)}
                        className={optionClass(
                          formData.budget === budget,
                          "p-3 md:p-4 text-sm md:text-base",
                        )}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Étape 4 : Détails */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    Dites-nous en plus
                  </h3>
                  <p className="text-slate-600">
                    Facultatif, mais cela nous aide à établir un devis précis
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description de l’intervention
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Décrivez le problème ou les travaux nécessaires (par ex. nombre de pièces, disjoncteurs qui sautent, nouvelles prises)…"
                  />
                </div>
              </div>
            )}

            {/* Étape 5 : Planification */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    Planifier une visite
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date souhaitée *
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={formData.preferredDate}
                      onChange={(e) =>
                        updateFormData("preferredDate", e.target.value)
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Heure souhaitée *
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        updateFormData("preferredTime", e.target.value)
                      }
                      className={inputClass}
                    >
                      <option value="">Sélectionnez une heure</option>
                      <option value="Matin (8 h - 12 h)">
                        Matin (8 h - 12 h)
                      </option>
                      <option value="Après-midi (12 h - 17 h)">
                        Après-midi (12 h - 17 h)
                      </option>
                      <option value="Soirée (17 h - 20 h)">
                        Soirée (17 h - 20 h)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Moyen de contact souhaité *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "whatsapp", name: "WhatsApp", icon: MessageCircle },
                      { id: "phone", name: "Téléphone", icon: Phone },
                      { id: "email", name: "Email", icon: Mail },
                    ].map((method) => {
                      const Icon = method.icon;
                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() =>
                            updateFormData("contactMethod", method.id)
                          }
                          className={optionClass(
                            formData.contactMethod === method.id,
                            "p-3 md:p-4 text-sm md:text-base",
                          )}
                        >
                          <Icon className="w-6 h-6 mx-auto mb-2" />
                          {method.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Retour
                </button>
              ) : (
                <div />
              )}

              {currentStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canContinue()}
                  className="px-8 py-3 bg-yellow-300 hover:bg-yellow-400 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-neutral-900 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-md disabled:shadow-none"
                >
                  Continuer
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canContinue()}
                  className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-yellow-300 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-lg disabled:shadow-none"
                >
                  <CheckCircle className="w-5 h-5" />
                  Demander un devis
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
