import styles from '@/styles/BookInfo.module.css';

export default function BookInfo({ book }) {
  if (!book) return null;

  return (
    <div className={styles.panel}>
      <div className={styles.copy}>
        {book.id === 1 && <SASContent />}
      </div>
    </div>
  );
}

function SASContent() {
  return (
    <>
      <p>
        <em>Seeing Against Seeing</em> is an artist book created by Alexey Yurenev in
        collaboration with designer Teun van der Heijden and the Anti-Kriegs-Museum in
        Berlin. It is one of several outcomes of <em>Silent Hero</em>, a visual research
        project and historical investigation into Yurenev's grandfather's unspoken
        experience during World War II.
      </p>

      <p>
        Rooted in the documentary tradition, Yurenev's practice confronts the challenge
        of visualizing what cannot be seen: absences in family and state archives,
        repressed memories, and events without witnesses. If photojournalism shows what
        could not be observed firsthand, one of generative AI's more provocative
        capacities is to imagine what never happened, but could have. It is this
        speculative potential that draws Yurenev into collaboration with artificial
        intelligence.
      </p>

      <p>
        At the heart of the book is a dialogue with Ernst Friedrich's 1924 anti-war
        manifesto <em>War Against War!</em>, which used graphic photographs to dismantle
        war's heroic image. Yurenev responds by employing a bespoke generative model
        trained on 35.000 portraits and landscapes of the WWII-era. The resulting
        synthetic images bear a striking resemblance to Friedrich's photographs, echoing
        their visual grammar, yet they do not merely imitate historical evidence.
        Instead, they peel away the surface of photographic realism, exposing what lies
        beneath it—the flesh under the skin of the image.
      </p>

      <p>
        Yurenev printed the generated images manually by using a polymer technique and
        showed the prints to five Red Army centenarian veterans in Brighton Beach, New
        York. These veterans, of the same generation as Yurenev's grandfather are known
        as the silent generation. The images seem to have the effect of a Rorschach test
        on these veterans. Their verbal reactions, which are also recorded in the film{' '}
        <em>No One is Forgotten</em>, are interwoven with the images in the book.
        Although AI is fundamentally statistical, here the reading of abstraction becomes
        psychological: revealing war's true face as grotesque.
      </p>

      <p>
        The object is born out of an amalgam of a dissection of an eighties pocket
        edition of <em>War against War</em>, Yurenev's polymer prints and the response of
        the Red Army veterans printed in silver ink on translucent pages. The book block
        is hand bound and has the appearance of a brick. The object comes in a hand
        welded iron case that will become rusty over time. The sawing marks on the spine
        of the book and the welding marks on the iron case appear like scars. The book
        aims to be a meditation on vision itself: how we see, what remains unseen, and
        how seeing might be turned against itself.
      </p>

      <p className={styles.isbn}>ISBN: 979-8-218-79238-1</p>

      <ul className={styles.editions}>
        <li>271 × Limited Edition</li>
        <li>24 × Special Edition</li>
        <li>7 × Gravure Edition (4 available)</li>
        <li>3 × Plate Edition (contact to order)</li>
      </ul>

      <p className={styles.note}>
        <em>Seeing Against Seeing</em> is listed in LensCulture.com Favorite Books of
        2025 and shortlisted for Dummy Award '24.
      </p>

      <p className={styles.sectionHead}>Exhibitions</p>
      <ul className={styles.exhibitions}>
        <li className={styles.year}>2026</li>
        <li>Rotterdam Photo Festival, <em>Seeing Against Seeing</em>, Rotterdam, NL</li>
        <li className={styles.year}>2025</li>
        <li>FOAM Editions, <em>Seeing Against Seeing</em>, Amsterdam, NL</li>
        <li>Palazzo Poggi Museum, <em>Prompting the Real</em>, Bologna, IT</li>
        <li>Plac'Art Artist Book Exhibition, Paris, FR</li>
        <li>Rencontres D'Arles, Book Launch, Arles, FR</li>
        <li>History Museum of Bosnia and Herzegovina, <em>Testimonies of Light</em>, Sarajevo, BA</li>
        <li>MOMus Modern/Costakis Collection, <em>Universal War</em>, Thessaloniki, GR</li>
        <li>Hangar Art Center, <em>Photography and Generative AI</em>, Brussels, BE</li>
        <li className={styles.year}>2024</li>
        <li>Dummy Award '24 World Book Tour</li>
        <li>FOAM Museum, <em>Missing Mirror</em>, Amsterdam, NL</li>
      </ul>

      <p className={styles.sectionHead}>Order</p>
      <ul className={styles.prices}>
        <li>Limited Edition — $300</li>
        <li>Special Edition (includes signed photogravure) — $500</li>
        <li>Gravure Edition (51 photogravures in the book) — $1,500</li>
        <li>Plate Edition (51 photogravures + original polymer plate + book cradle) — $5,000 (contact to order)</li>
        <li>Book Table — $1,500 (contact to order)</li>
      </ul>

      <p className={styles.sectionHead}>Publication</p>
      <p>E-Flux #160</p>

      <p className={styles.sectionHead}>Notable Collections</p>
      <ul className={styles.collections}>
        <li>Johns Hopkins University Sheridan Library, Artist Book (×24)</li>
        <li>FOAM, A.P. (×1)</li>
        <li>Duke University Library, Gravure Edition (×1)</li>
        <li>Harvard University Library, Gravure Edition (×1)</li>
        <li>Anti-Krieg Museum, Limited Edition (×1)</li>
      </ul>
    </>
  );
}
