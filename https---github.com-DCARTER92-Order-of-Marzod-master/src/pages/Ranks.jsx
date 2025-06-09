import React from 'react';

export default function Ranks() {
  return (
    <div className="text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10 scroll-smooth">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"></div>
      
      <h1 className="text-4xl font-bold mb-16 text-center text-shadow-lg">Ranks and Roles in The Order of Marzod</h1>

      <nav className="sticky top-4 mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-2xl font-semibold mb-6 text-shadow-lg">Table of Contents</h2>
        <ul className="space-y-3 text-lg">
          <li><a href="#council" className="text-blue-400 hover:text-blue-300 text-shadow-lg">1. The Marzodian Council</a></li>
          <li><a href="#specialties" className="text-blue-400 hover:text-blue-300 text-shadow-lg">1.1. Of Specialties and Refinements</a></li>
          <li><a href="#collectives" className="text-blue-400 hover:text-blue-300 text-shadow-lg">1.2. Of Collectives</a></li>
          <li><a href="#ranks" className="text-blue-400 hover:text-blue-300 text-shadow-lg">2. Ranks</a></li>
          <li><a href="#trials-ascension" className="text-blue-400 hover:text-blue-300 text-shadow-lg">Trials of Ascension</a></li>
          <li><a href="#trials" className="text-blue-400 hover:text-blue-300 text-shadow-lg">The Trials</a></li>
        </ul>
      </nav>

      <section id="council" className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">1. The Marzodian Council</h2>
        <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
          <p className="indent-8">
            The Marzodian Council is the chief body of the Order, the final authority in the interpretation of doctrine, and shall be comprised of the three Keepers possessing the greatest number of Specialties and Refinements. Should one fit to serve choose not to do so, the mantle of leadership shall pass to the next in succession.
          </p>
          <p className="indent-8">
            A seat upon the Council may not be revoked, save by death, voluntary resignation, or by the will of the other two members. In all matters brought before the Council, the decision of the majority shall prevail, and such a ruling may not be revisited for one year, save by the Council's own unanimous decree.
          </p>
          <p className="indent-8">
            A gathering of the Council shall be called upon the following occasions to render a decision, and no decree thus made may be reversed except by the formal declaration of no less than nine tenths of all Chief Keepers, or unanimous decree of the Council.
          </p>
        </div>
      </section>

      <section id="specialties" className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">1.1. Of Specialties and Refinements</h2>
        <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
          <p className="indent-8">
            A Specialty is attained through the submission of a treatise, composed by a Keeper, containing no fewer than seven pages on a singular subject. Acceptable subject matter shall generally encompass fields such as physics, chemistry, alchemy, mathematics, natural history, psychology, mythology, religion, ancient cultures, philosophy, mysticism or the occult, and other matters which advance knowledge of the nature of the universe or ancient peoples, from whom much insight into mysterious forces may be gleaned.
          </p>
          <p className="indent-8">
            This treatise shall be presented before the Council, who shall judge it according to its merit in truth, insight, and distinction from the Keeper's other Specialties, which is to say, whether it sufficiently broadens the Keeper's knowledge to merit further accreditation. Should the work fail in this last, but otherwise be of good quality, it shall be considered a Refinement of a Specialty, or a deepening of existing knowledge. By their judgment, the Council may approve or reject such a work.
          </p>
        </div>
      </section>

      <section id="collectives" className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">1.2. Of Collectives</h2>
        <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
          <p className="indent-8">
            A Collective is the local manifestation of the Order, a sanctuary of knowledge, a place of learning for its students, and a gathering ground for its members. It is incumbent upon all members of the Order to be attached to a Collective, most often the one nearest their home, though this is not of necessity.
          </p>
          <p className="indent-8">
            Service to the Collective is commanded by the Chief Keeper and is the shared duty of all its members. Should a Keeper desire to head a Collective, they may do so by decree of the Council, dedicating their time to the recruitment and instruction of students.
          </p>
          <p className="indent-8">
            If any Keeper desires to found a Collective, or lay claim to one established, let the matter be presented to the Council, who shall bestow the position upon the Keeper most suited, choosing by the number of Specialties and Refinements they possess and the greatest need among the regions of the Earth. Yet, as with the Council itself, no Keeper is bound to accept such a charge, but may refuse it if they so wish.
          </p>
        </div>
      </section>

      <section id="ranks" className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">2. Ranks</h2>
        
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Chief Keeper</h3>
            <p className="indent-8">
              As the sovereign of their Collective, a Chief Keeper may in all things follow their own counsel and govern the Collective according to their wisdom, provided they do not transgress the Prime nor Secondary Laws. Nevertheless, if a Chief Keeper is unable or disinclined to resolve a matter, let him bring the matter before the Council for their judgment.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Keeper</h3>
            <p className="indent-8">
              Any Seeker, upon the acquisition of a Specialty, ascends to the station of Keeper, thereby gaining sufficient stature to guide a Collective or serve as an Overseer. Additional Specialties and Refinements may be obtained, augmenting and enhancing their station, advancing their standing in appointment to Chief Keeper or to the Council.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Seeker</h3>
            <p className="indent-8">
              A Seeker is numbered among the Order, although not yet of such stature as may permit them into positions of leadership, which are generally reserved for the Keepers, though a Chief Keeper may assign certain duties to Seekers should no qualified Keeper be found to accept the role.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Disciple</h3>
            <p className="indent-8">
              A Disciple is one who has attained an advanced stage of study, in which they may begin to bear minor responsibilities of membership and perform in sacred rituals involving human spirits and deities.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Initiate</h3>
            <p className="indent-8">
              An Initiate is one who has but commenced the journey of knowledge, and is constrained to performance in rituals involving the spirits of Nature and the Elements.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Novice</h3>
            <p className="indent-8">
              A Novice is one who possesses the fervent desire to tread the path of knowledge. There exists no particular requirement to attain this rank, save for the earnest wish to learn and the judgment of a Chief Keeper that the individual may bring credit and honor to the Order. Novices may not perform in rituals, but devote themselves to study of the foundational tenets of the Order and understanding of the Mysteries of the Universe.
            </p>
          </div>
        </div>
      </section>

      <section id="trials-ascension" className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">Trials of Ascension</h2>
        <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
          <p className="indent-8">
            The Trials of Ascension are the means by which one may ascend in station. They may be administered by any Keeper, who, upon a student's request, is bound to honor it within seven days, or else seek another Keeper to act in their stead. The full procedure is set forth below.
          </p>
        </div>

        <div className="mt-8 space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">1. Of Overseers</h3>
            <p className="indent-8 text-lg leading-relaxed text-shadow-lg">
              Overseers shall hold no station lower than that of Keeper, and it is their charge to conduct the Trials. An Overseer shall adhere scrupulously to all established forms of the Trials, and the word of the Overseer shall be deemed absolute, save in cases as specified in the following section, or by order of the Council.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">2. Of Special Permissions</h3>
            <p className="indent-8 text-lg leading-relaxed text-shadow-lg">
              In the ensuing requirements, the Aspirant is invited to exercise their own judgement in the choosing of many of the particulars. In such matters, the Overseer may exercise their discretion regarding the validity of the Aspirant's choices, but must yield to any prior permissions granted by a Keeper.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">3. Of Marzodian Runes</h3>
            <p className="indent-8 text-lg leading-relaxed text-shadow-lg">
              Fluency in the Runes is expected of all Seekers, and all material in attainment of the station of Keeper and any further Specialties or Refinements must be executed by hand using the Runes. The mysteries of the Runes are not to be revealed to any below the rank of Seeker, on pain of expulsion from the Order.
            </p>
          </div>
        </div>
      </section>

      <section id="trials" className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">The Trials</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">1. Novice</h3>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4">
              <li>Comprehends and accepts the Statement of Purpose, Core Principle, the Three Laws, and any further laws, vows, or rituals required of them by their Collective.</li>
              <li>Privileges and Responsibilities of Station: The Novice is granted admission into a Collective, though they must not disturb the peace. They shall share equally in toils of the community and perform in no rituals until advancing to the station of Initiate.</li>
              <li>During this time, the Novice shall receive and study materials of general education, including the Books of Water, Metal, and Earth.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">2. Initiate</h3>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4">
              <li>Journal: Seven pages</li>
              <li>Treatises:
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>One Mythology Treatise</li>
                  <li>The Nature of Marzod, Spirits, and the Fourth Dimension</li>
                </ul>
              </li>
              <li>Writings:
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>Letter and Reply</li>
                  <li>Languages</li>
                </ul>
              </li>
              <li>Privileges and Responsibilities of Rank: In addition to the privileges granted as a Novice, the Initiate may now partake in rituals befitting their station. However, they remain under the guidance of more experienced members and shall not yet assume leadership of such rituals.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">3. Disciple</h3>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4">
              <li>Journal: Fourteen pages</li>
              <li>Rituals: Three</li>
              <li>Treatises:
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>Two Mythology Treatises</li>
                  <li>100 Medicinal and Ritual Herbs</li>
                </ul>
              </li>
              <li>Writings:
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>Letter and Reply</li>
                  <li>Languages</li>
                  <li>Three rituals</li>
                </ul>
              </li>
              <li>Privileges and Responsibilities of Rank: In addition to the privileges of Initiate, the student may now engage in rituals suited to their new station and may lead rituals suited to the rank of Initiate.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">4. Seeker</h3>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4">
              <li>Journal: Twenty-one pages total
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>The fourteen pages requisite to attain the rank of Disciple must be written once more and perfected</li>
                  <li>A treatise addressing misconceptions previously held and now corrected</li>
                  <li>Seven additional pages</li>
                </ul>
              </li>
              <li>Rituals: Four</li>
              <li>Treatises:
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>Four Mythology Treatises</li>
                  <li>Comparison: 20 Deities of Disparate Cultures</li>
                  <li>Incorrect Items of Student Journal</li>
                </ul>
              </li>
              <li>Privileges and Responsibilities of Rank: Upon reaching the station of Seeker, the individual has become a full member of the Order.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">5. Keeper</h3>
            <p className="mb-4 text-lg leading-relaxed text-shadow-lg">
              While the preceding stations may be attained through Trials administered by any Keeper, the final station must be secured through a Trial overseen by the Council. All written materials composed for attainment of this station must be executed using the Marzodian Runes.
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4">
              <li>Rituals: Seven</li>
              <li>Treatises:
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>Seven Mythology Treatises</li>
                  <li>Seven pages upon a singular subject, to be the Keeper's Specialty</li>
                </ul>
              </li>
              <li>Writings:
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>Letter and Reply</li>
                  <li>Languages, consisting of new Writings in all three previous languages and one new language</li>
                  <li>Seven rituals</li>
                </ul>
              </li>
              <li>Privileges and Responsibilities of Rank: By order of the Council, a Keeper may ascend to the position of Head of a Collective, granted upon the grounds of knowledge and need.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
