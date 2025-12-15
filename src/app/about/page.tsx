import React from 'react';

const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Spagyric Medical Practitioners</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Advancing Complementary and Alternative Medicine in Nigeria through Professional Excellence
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Membership
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">Professional Regulation</h2>
            <p className="text-gray-700 mb-4">
              The Nigeria Complementary and Alternative Medicine (CAM) profession is bound by existing policies, and all branches of CAM are legally regulated by the Medical and Dental Council of Nigeria (MDCN), Decree No. 38 of 1998, and the Medical and Dental Council Act of 1992. These regulations cover various forms of CAM specialties, such as Homeopathy, Naturopathy, Osteopathy, Chiropractic, and Acupuncture.
            </p>
            <p className="text-gray-700">
              However, the entire CAM profession as a cadre had been excluded from government promotion until the creation of the Traditional and Complementary Alternative Medicine (TCAM) Department at the Federal Ministry of Health in 2018. Since then, efforts to develop TCAM have been underway, following a step-by-step due process. Despite challenges, including the unapproved TCAM Council, the Federal Government and TCAM stakeholders have worked tirelessly to move the TCAM bill forward. We are hopeful that, with God&apos;s grace, the bill will be successful.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t border-l border-r border-b-4 border-green-600">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-green-700 font-bold">EH</span>
              </div>
              <h2 className="text-xl font-semibold text-green-800">EH-CAM Spagyric Clinical Services</h2>
            </div>
            <p className="text-gray-700">
              EH-CAM is a registered trademark logo that symbolizes EH-CAM Spagyric Clinical Services in Nigeria, under the auspices of WEHO Nigeria. This affiliated body works as a collaborative partner to promote Spagyric Electro-Homeopathy (EH) through the Nigeria Electro-Homeopathic Society of Spagyric Medical Practitioners.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t border-l border-r border-b-4 border-blue-600">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-700 font-bold">TC</span>
              </div>
              <h2 className="text-xl font-semibold text-blue-800">EH-TCAM Holistic Medical Service LTD</h2>
            </div>
            <p className="text-gray-700">
              EH-TCAM Holistic Medical Service LTD is a registered company that promotes general CAM services and focuses on researching clinically in TCAM, with a particular emphasis on Spagyric Electro-Homeopathic general practices and clinical services in Nigeria.
            </p>
          </div>
        </section>

        {/* Cure Like Cure Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-700 to-blue-800 text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">CURE LIKE CURE</h2>
            <p className="mb-4">
              The term &quot;cure like cure&quot; typically refers to Classical Homeopathy. However, the concept of vital force is also a key factor in establishing the phenomenon of homeopathy as a whole. This term is often understood in relation to other traditional medicine systems, such as Qi in Traditional Chinese Medicine (TCM), Prana in Ayurveda, and ODforce in Electro-Homeopathy.
            </p>
            <p>
              In ancient Spagyric medical science and philosophy, Mercury and Sulfur were considered among the basic elements. In Electro-Homeopathic approaches, Dr. Count Cesare Mattei&apos;s principles and his followers focus on healing through methodologies that involve condensing natural energy frequencies extracted from plants. These approaches involve studying patient temperaments clinically and applying remedies to the human body internally or externally, using multiple techniques that originated from plant electricity. The studies also explore the interlinkages between macrocosmic energy and microcosmic energy, transmitted as ODforce, according to the principles of Baron Karl (1788-1869), and the observation of pathological influences as excess or deficient energy.
            </p>
          </div>
        </section>

        {/* ODFORCE Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">ODFORCE (UNIVERSAL FORCE)</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">The Meaning, Kinds, and Importance of ODForce</h3>
            <h4 className="text-lg font-semibold text-green-700 mb-2">What is ODforce?</h4>
            <p className="text-gray-700 mb-6">
              The ODForce (approximately translated as Prana in Vedic literature) is an example of CHI in Chinese culture, which was influenced by acupuncture. In Japan, this energy is called KI, while the Indians refer to it as Prana. Baron von Reichenbach called it OD, and Wilhelm Reich called it ORGON. In alchemy (Alchymie), it is referred to as CHY, and in homeopathy, it is known as VITAL FORCE.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Relationship of Electro with ODForce</h3>
            <p className="text-gray-700">
              Here, I would like to provide details on Pranagni present in the body, which provides essential nutrients to life. Mattei refers to this Pranagni as electricity in his medicines, which plays an important role in bringing energy back to normal when it is lost. It is Pranagni that helps digest food through metabolic processes. The purification of the body is complete when the lungs become strong and healthy, and when electrical currents start flowing in the body due to friction with the air. The aspirant should practice controlling the ODFORCE outside or inside at will. Without prior purification of the entire body and nerves, control over Prana may cause trouble in the body.
            </p>
          </div>
        </section>

        {/* Concept Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The Concept of Spagyric Electro-Homeopathy</h2>
            <p className="text-gray-700">
              The whole concept of Spagyric Electro-homeopathy is to observe the disintegration of Microcosm and Macrocosm from a holistic point of view and then consciously understand the equable correspondence of ODforce externally and internally. This is why invisible and visible therapeutic values must be considered as a way of transforming the internal body to balance through modulating resonance frequencies externally or internally. These may vary depending on the approach within Complementary and Alternative Medicine.
            </p>
          </div>
        </section>

        {/* Alchemy Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">ALCHEMY - SPAGYRIC</h2>
            <p className="text-gray-700 mb-4">
              First: Alchemy is the oldest powerful manufacturing process of medicine, in which remedies are preserved as natural energies in the form of pure essence in dynamic force, called dilutions.
            </p>
            <p className="text-gray-700">
              Second: Homeopathy&apos;s Law is the oldest ancient principle of medical practice in history, later rediscovered by Hahnemann in his homeopathy, now known as Classical Homeopathy. The phenomenon of complex in complex is a totally different approach and is now used in Spagyric Therapy compared to original Classical Homeopathy.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">PLANT &amp; PLANTS – NATURE&apos;S LABORATORIES</h2>
            <p className="text-gray-700">
              All remedies are 100% plant-made. In today&apos;s world, where we are facing environmental issues globally, going back to nature is the only solution for the ongoing proliferation of unwanted tissue growth, pains, cancers, and carcinogenic products adopted as a way of life.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Founder and Further Developments</h2>
            <p className="text-gray-700 mb-4">
              Spagyric Therapy&apos;s roots can be linked to the beginning of mankind, thousands of years far back to the ancient rishis and Hippocrates. Spagyric became noticeable or popular over 500 years ago when Paracelsus elaborated on the logic or reinvented Spagyric in Europe, laying the foundation stone for today&apos;s modern chemistry. Unfortunately, his work was lost 500 years ago. He can be regarded as the grandfather of Pharmacy.
            </p>
            <p className="text-gray-700 mb-4">
              In the 19th century, Count Mattei reinvented Spagyric Therapy, which had been lost since Paracelsus&apos; time. He created a new medical system using the Spagyric principle for manufacturing his medicine. Spagyric Therapy/Electro Homeopathic Medicine was coined by Count Cesare Mattei during his lifetime (1809-1896) in Bologna, Italy.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-2">Spagyric&apos;s Further Development</h3>
            <p className="text-gray-700 mb-4">
              Spagyric&apos;s further development continued through Mattei&apos;s disciple, Karuss, who painstakingly revived and added more remedies to the system based on Mattei&apos;s Theory. Later, the Karuss Spagyric Method gained an official place in the German Homeopathic Pharmacopoeia. Unfortunately, the entire Spagyric system was lost again during World War II in Europe.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-2">Types of Spagyric Remedies</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">Maceration as Spagyric Remedies</li>
              <li>Cohobation as Spagyric Remedies</li>
            </ul>
          </div>
        </section>

        {/* What is Electro-Homeopathy Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-700 to-blue-800 text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">What is Electro-Homeopathy?</h2>
            <p className="mb-4">
              Electro-Homeopathy is formed from three words:
              Electro = energy,
              Homeo = similar, and
              Pathy = suffering.
            </p>
            <p>
              The phenomenon of electro in plants, blood, and lymph (morbid or both) involves studying the impurities of blood, lymph, and both, leading to constitutional pathology correspondence to the law of temperament and selection of remedies according to the law of opposites by registered Spagyric EH Practitioners. This is what we consider legitimate Spagyric EH practices in Nigeria.
            </p>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="mb-16 overflow-x-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 min-w-full">
            <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">Cooperative Table: Basic Fundamental Principles of Homeopathy and Electro-Homeopathy</h2>
            
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <th className="border border-white px-4 py-3 text-left font-semibold">Homeopathy</th>
                  <th className="border border-white px-4 py-3 text-left font-semibold">Electro-homeopathy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 bg-green-50">Law of similar</td>
                  <td className="border border-gray-200 px-4 py-3 bg-blue-50">Complex curantur</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Complex remedies</td>
                  <td className="border border-gray-200 px-4 py-3">Combination, that is beyond one plants</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 bg-green-50">Infinitesimal dose</td>
                  <td className="border border-gray-200 px-4 py-3 bg-blue-50">Diluted form of positive and negative dose</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Selection of remedies</td>
                  <td className="border border-gray-200 px-4 py-3">Temperament of the patient i.e. Lymphatic, Sanguine, Mixed.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 bg-green-50">Homeopathy medicine is prepared from poisonous and non poisonous plants, metal, minerals and animals.</td>
                  <td className="border border-gray-200 px-4 py-3 bg-blue-50">Electro–Homoeopathy medicine is prepared from non-poisonous plants only.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Alcohol is used for preparation of medicine.</td>
                  <td className="border border-gray-200 px-4 py-3">Distilled water or rectified spirit is used for preparation of medicine.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 bg-green-50">Extracts of medicine are known as mother tincture.</td>
                  <td className="border border-gray-200 px-4 py-3 bg-blue-50">Extracts of medicine are known as Spagyric Essence</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Single medicine is chosen on the basis of the totality of system which appears in a person.</td>
                  <td className="border border-gray-200 px-4 py-3">Complex medicine is chosen for the complex symptom which appears in a person.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 bg-green-50">In homeopathy drug aggravation can occur making difficult to differentiate disease and drug aggravation.</td>
                  <td className="border border-gray-200 px-4 py-3 bg-blue-50">There is no risk of drug aggravation in Electro-homoeopathy due to simple symptoms simple combination and complex symptoms complex combination.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">It is a single remedy system.</td>
                  <td className="border border-gray-200 px-4 py-3">It is a mixed remedy system.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 bg-green-50">Treatment is based on symptoms.</td>
                  <td className="border border-gray-200 px-4 py-3 bg-blue-50">Treatment is based on temperaments.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Medicine is tested on healthy human beings.</td>
                  <td className="border border-gray-200 px-4 py-3">Medicine is tasted on diseased persons.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 bg-green-50">Original strength of &apos;Vital force&apos; is reduced as alcohol is used in preparation of medicine</td>
                  <td className="border border-gray-200 px-4 py-3 bg-blue-50">Original strength &apos;OD force&apos; remains as it is, as only distilled water or rectified spirit is used in preparation of medicine</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">In homoeopathy, vital force is the chief controller of the body. Vital force is responsible for disease and health condition of the body</td>
                  <td className="border border-gray-200 px-4 py-3">In electro-homoeopathy, &quot;OD force&quot; is the chief controller of the body. OD force is collected from nature and controls the disease by purifying blood and lymph.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 bg-green-50">It is very difficult to select the medicine for controlling the acute – ness of the disease on the basis of the symptoms appeared</td>
                  <td className="border border-gray-200 px-4 py-3 bg-blue-50">It is very easy to select the medicine for controlling the acuteness of the disease on the basis of the symptom appeared</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Society Information Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Nigeria Electro Homoeopathic Society of Spagyric Medical Practitioners</h2>
            <p className="text-gray-700 mb-4">
              This body was registered and is designed officially to represent Spagyric Electro-homeopathic general practices and promote the entire profession in the cadre of Nigeria Complementary and Alternative Medicine. The body is solely registered to guide and protect Nigerians from Spagyric Electro-homeopathic quackery practices; however, it maintains an international code of ethics in respect of Spagyric Therapy/Electro-homeopathic Medical science and services in general and collaborates with members in international partnerships development and practices in Nigeria.
            </p>
            <p className="text-gray-700 mb-4">
              Similarly, it respects and represents the professionalism of Spagyric Medicine and the scope of Spagyrism in Nigeria, whatever practices, products/services, or research bearing the name of Spagyric Therapy/Electro-homeopathic Medicine and disease phenomena under Count Cesare Mattei&apos;s Principles and other Spagyric medicine approaches worldwide.
            </p>

            <h3 className="text-xl font-semibold text-green-700 mt-8 mb-2">The Law of Spagyric Solution</h3>
            <p className="text-gray-700 mb-4">
              The law of Spagyric solution, essence, or remedies preparation, dilutions, research, and prescriptions is according to Mattie&apos;s Philosophy and the ancient intercontinental form of Spagyric medicine in collaboration with expert international Spagyric EH members partnering development in Nigeria.
            </p>

            <h3 className="text-xl font-semibold text-green-700 mt-8 mb-2">What is Spagyric Therapy/EH Medicine Philosophy, Principles, and Practice?</h3>
            <p className="text-gray-700 mb-4">
              The word &quot;Spagyric&quot; consists of two compounded words that mean &quot;separate&quot; and &quot;recombine.&quot; The final result is quantities and qualitative total volume and values of electricity found in plant extracts according to Spagyrism, known as ODforce in whole and in essence. The approaches of Spagyrism in remedy manufacturing are technically and spiritually considered in two dimensions: maceration process and cohobation.
            </p>
            <p className="text-gray-700">
              These procedures are concurrently engaged in transforming the healing substance in a physical, energetic, and spiritual manner of plants in planetary time. These are technically done to maximize the internal or external remedies&apos; therapeutic effect and responses by the whole body according to the philosophy of ancient Spagyrism and Electro-homeopathic healing techniques. All these should be recorded by the Nigeria Electro-homeopathic Society of Spagyric Medical Practitioners in clinical formats.
            </p>
          </div>
        </section>

        {/* Efforts by Scholars Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-700 to-blue-800 text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Efforts Made by Scholars</h2>
            <p className="mb-4">
              The efforts made by scholars in reserving the science of Spagyric Electro-homeopathy by Paracelsus, Count Cesare Mattei, Krauss, Zimple, Sauta, Fathemuller, and others, guided by Spagyrism as a whole, do not represent electronic devices, electromagnetic machines, energy medicine devices, or tools to manage, treat, or diagnose diseases.
            </p>
            <p>
              Rather, it is a separate system of medicine that has been in practice and well understood as a unique procedure of pure plant innovative medicine within the scope of Complementary and Alternative Medicine in various countries such as Italy, Germany, France, United Kingdom, Sweden, Austria, Australia, USA, India, and Pakistan for the past 150 years in the history of Complementary and Alternative Medicine.
            </p>
          </div>
        </section>

        {/* Medicine Recognition Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Spagyric Electro-Homeopathic Medicine</h2>
            <p className="text-gray-700 mb-4">
              In Germany, Spagyric Electro-homeopathic medicine was boldly written in the German Homeopathic Pharmacopoeia. In Europe, the practice of Spagyrism and Spagyric therapy had been used many years before the discovery of electricity in plant extracts under the philosophy of Count Cesare Mattei, and the practice was highly respected. It is the only recognized scientific system of plant-based medicine that goes along with the natural law of healing and equability in natural recovery. In some ancient books, it was documented as &quot;Magic medicine.&quot; Nigeria is now recognized among the sequence and series of countries that practice Spagyric Therapy/Electro-homeopathic Medicine and general services in Africa in the name of EH-CAM Spagyric.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-2">Spagyric Electro-Homeopathic Medicine is Not Substandard</h3>
            <p className="text-gray-700 mb-4">
              Spagyric Electro-homeopathic Medicine is not something lighter or substandard; moreover, it requires years of practice and mentorship following the study of Complementary and Alternative Medicine as a cadre, like Doctor of Homeopathy or Doctor of Naturopathy. The practice has an independent philosophy and clinical practice that takes us to pathology and diseases. Furthermore, incubation of diseases, diagnoses, prognoses, and factors supported by the philosophy empowered the pathological constitution seated due to vitiated fluids (lymph, blood, or mixed constitution) and corresponding temperament.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-2">Spagyric Therapy/Electro-Homeopathic Philosophy</h3>
            <p className="text-gray-700 mb-4">
              In Spagyric Therapy/Electro-homeopathic Philosophy, all mechanisms of Mercury, Salt, and Sulfur are virtually quantified as a whole. The influence of ODforce in the whole body and the effect of external temperament and internal body is fixed as quantum frequencies in the microcosm. The ODforce corresponds to Mercury and Sulfur, and the whole sequence of transformations between the macrocosm and microcosm is powered by the equable ODforce frequencies.
            </p>
            <p className="text-gray-700 mb-4">
              The imbalance of ODforce acquired by the external temperament or inner body defect by the internal temperament ushers in clinical orientations that lead CAM practitioners in their basic assessment of transmutations forming constitutional pathology and symptoms corresponding to lymphatic temperament, Sanguine temperament, and Mixed temperament.
            </p>
            <p className="text-gray-700 mb-4">
              In Spagyric Electro-homeopathic therapy, animals are valued, so the remedies are unique and well-known as plant-based scientific sources of medication. Poisonous plants are not allowed, and potent remedies are used in disease proportions equal to the reference temperament and totality of symptoms collected from the patient by a qualified CAM practitioner as methods of clinical diagnosis not merely as remedis prescription proceedures in pure homeopathy.
            </p>
            <p className="text-gray-700">
              All diseases are developed from the alteration of four basic phenomena according to the Spagyric Electro-homeopathic principle of practice:
            </p>
            <ol className="list-decimal pl-6 mt-4 text-gray-700">
              <li className="mb-2">Impure blood, lymph, or both,</li>
              <li className="mb-2">Imbalance of ODforce,</li>
              <li className="mb-2">The disintegration of Mind, Soul, and Physical Body,</li>
              <li>Failure to control and oversee the specific temperament before prescription according to Spagyric remedies and EH-CAM temperament, governing the actual assortment among the three temperaments due to the over-influence of one against another.</li>
            </ol>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-2">Nigeria Electro-Homoeopathic Society</p>
              <p className="mb-2">Lagos, Nigeria</p>
              <p className="mb-2">Email: info@nehs.org.ng</p>
              <p>Phone: +234 XXX XXX XXXX</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Membership</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="font-semibold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="font-semibold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="font-semibold">t</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {currentYear} Nigeria Electro-Homoeopathic Society of Spagyric Medical Practitioners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;