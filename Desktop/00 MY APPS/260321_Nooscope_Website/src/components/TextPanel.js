import styles from '@/styles/TextPanel.module.css';

export default function TextPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.copy}>
        <p>
          Seeing Against Seeing is an artist book created by Alexey Yurenev in collaboration with designer Teun van der Heijden and the Anti-Kriegs-Museum in Berlin. It is one of several outcomes of Silent Hero, a visual research project and historical investigation into Yurenev's grandfather's unspoken experience during World War II.
        </p>
        <p>
          Rooted in the documentary tradition, Yurenev's practice confronts the challenge of visualizing what cannot be seen: absences in family and state archives, repressed memories, and events without witnesses. If photojournalism shows what could not be observed firsthand, one of generative AI's more provocative capacities is to imagine what never happened, but could have. It is this speculative potential that draws Yurenev into collaboration with artificial intelligence.
        </p>
        <p>
          At the heart of the book is a dialogue with Ernst Friedrich's 1924 anti-war manifesto War Against War!, which used graphic photographs to dismantle war's heroic image. Yurenev responds by employing a bespoke generative model trained on 35.000 portraits and landscapes of the WWII-era. The resulting synthetic images bear a striking resemblance to Friedrich's photographs, echoing their visual grammar, yet they do not merely imitate historical evidence. Instead, they peel away the surface of photographic realism, exposing what lies beneath it—the flesh under the skin of the image.
        </p>
        <p>
          Yurenev printed the generated images manually by using a polymer technique and showed the prints to five Red Army centenarian veterans in Brighton Beach, New York. These veterans, of the same generation as Yurenev's grandfather are knows as the silent generation. The images seem to have the effect of a Rorschach test on these veterans. Their verbal reactions, which are also recorded in the film No One is Forgotten, are interwoven with the images in the book. Although AI is fundamentally statistical, here the reading of abstraction becomes psychological: revealing war's true face as grotesque.
        </p>
        <p>
          The object is born out of an amalgam of a dissection of an eighties pocket edition of War against War, Yurenev's polymer prints and the response of the Red Army veterans printed in silver ink on translucent pages. The book block is hand bound and has the appearance of a brick. The object comes in a hand welded iron case that will become rusty over time. The sawing marks on the spine of the book and the welding marks on the iron case appear like scars. The book aims to be a meditation on vision itself: how we see, what remains unseen, and how seeing might be turned against itself.
        </p>
      </div>
    </div>
  );
}
