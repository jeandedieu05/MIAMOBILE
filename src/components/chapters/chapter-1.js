import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Video from 'react-native-video';
import image1 from '../../assets/images/project-image-00.jpg';
import InView from '../../helpers/inView';

export default function Chapter1({setMapLocation, setMapMarkers, setMapZoom}) {
  const styles = StyleSheet.create({
    container: {
      height: 350,
      width: 350,
      backgroundColor: 'tomato',
    },
    map: {
      flex: 1,
      height: 350,
      width: 350,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: 300,
      width: 350,
    },
  });
  return (
    <View style={tw`h-6/12 `}>
      <View style={{backgroundColor: '#15181b', height: 100}}>
        <View>
          <Text style={tw.style('text-xl my-2 ml-8', {color: '#a1a1a1'})}>
            Unit One
          </Text>
        </View>
        <View>
          <Text
            style={tw.style('text-2xl ml-7 leading-tight font-semibold', {
              color: '#3debf3',
            })}>
            {' '}
            The Lower North Shore
          </Text>
        </View>
      </View>

      <View style={tw.style('px-1', {backgroundColor: '#2f3134'})}>
        <Text
          style={tw.style('px-1 text-sm leading-relaxed', {
            color: '#eae9e9',
            fontFamily: 'Hind Madurai sans-seri',
          })}>
          &quot;For the sailor who is not familiar with these passages, nothing
          is more frightening than the Labrador coast when he sees it from the
          open sea on a stormy day. He sees only an uninterrupted line of reefs
          where the waters break into prodigious spray. For the sailor of the
          coast, nothing is more hospitable than this formidable line, because
          he knows that behind it he will find the safest harbors, where all the
          fleets of the world would take shelter and where the deepest channels
          would lead them, if they dared to try to engage there.&quot;
        </Text>

        <Text
          style={tw.style('text-sm pb-3 italic mt-2', {
            color: '#eae9e9',
            fontFamily: 'Hind Madurai sans-seri',
          })}>
          (Henri de Puyjalon)
        </Text>
      </View>
      <View>
        {/* <Text style={tw`text-red-500`}>ReactWaves</Text> */}
        {/* <WaveForm
        source={require('../../assets/audio/the-labrador.mp3')}
        waveFormStyle={{waveColor: 'red', scrubColor: 'white'}}
      /> */}
      </View>
      <View>
        <Text style={tw`text-black`}>
          When Jacques Cartier first sailed through the Strait of Belle Isle
          into the Gulf of St. Lawrence to explore what is now called the Lower
          North Shore, he was struck by the inhospitable landscape. &quot;Except
          at Blanc Sablon,&quot; he recorded in his journal, &quot;there is
          nothing but moss and short, stunted shrub…I am inclined to believe
          that this is the
          <Text style={tw`text-black font-bold pl-2`}>
            land God gave to Cain .&quot;
          </Text>
        </Text>
      </View>
      <View style={{height: 150, width: 350}}>
        <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }} // Can be a URL or a local file.
          style={styles.backgroundVideo}
        />
      </View>
      <Text style={tw`text-green-500`}>(Geographic Territory)</Text>

      {/* <InView
      onChange={inView => {
        if (inView) {
          console.log('holalallalalaalla => ', inView);
        }
      }}
    /> */}

      <InView
        onChange={inView => {
          if (inView) {
            // console.log(inView);
            setMapLocation({lat: 51.413093, long: -63.171605});
            setMapMarkers([
              {
                lat: 48.144653,
                long: -69.713854,
                description: 'Tadoussac',
              },
              {
                lat: 54.8352066,
                long: -66.4875843,
                description: 'Schefferville',
              },
              {
                lat: 49.417004,
                long: -63.066282,
                description: 'Anticosti',
              },
              {
                lat: 51.413093,
                long: -57.171605,
                description: 'Blanc Sablon',
              },
            ]);
            setMapZoom(5.25);
          }
        }}
        // onChange={inView => checkVisible(inView)}
      />

      <View>
        <Text style={tw`text-black`}>
          The Lower North Shore is part of the Duplessis tourist region of the
          federal county of Manicouagan.The Duplessis tourist region stretches
          between Tadoussac and Blanc-Sablon, all the way up to Schefferville.
          It also includes Anticosti Island.
        </Text>
      </View>
      <View>
        <Text style={tw`text-black`}>
          From Kegaska to Blanc-Sablon, there are 15 villages scattered along
          approximately 360 kilometres of coastline. The Lower North Shore is
          bordered to the west by the Natashquan River and to the east by
          Blanc-Sablon, which marks the border with Labrador in the province of
          Newfoundland and Labrador. The Innu call this region
          &quot;Mamit&quot;.
        </Text>
      </View>
      <Text style={tw`text-green-500`}>
        (Administrative Territory / Population)
      </Text>
      <View>
        <Text style={tw`text-black`}>
          This region has long been known as &quot;Canadian Labrador&quot;. On
          June 22, 1963, the Government of Quebec gave it the name of
          Municipality of Côte-Nord-du-Saint-Laurent, which at that time
          included the villages of Kegaska, Musquaro, La Romaine, Wolf Bay,
          Etamamiou, Chevery, Harrington Harbour, Aylmer Sound,
          Tête-à-la-Baleine, La Tabatière and Mutton Bay. The municipality of
          Blanc-Sablon was created in 1990 and includes three villages:
          Blanc-Sablon, Lourdes-de-Blanc-Sablon and Brador. On January 1, 1994,
          Gros-Mécatina became a municipality in its own right by separating
          from the municipality of Côte-Nord-du-Saint-Laurent.
        </Text>
      </View>

      <View>
        <Text style={tw`text-black`}>
          The MRC (Regional County Municipality) of the Gulf of St. Lawrence was
          created in 2010 and includes the municipalities of Petit-Mécatina,
          Blanc-Sablon, Bonne-Espérance, Gros-Mécatina,
          Côte-Nord-du-Golfe-du-Saint-Laurent and Saint-Augustin. Although they
          are within the territory, the villages of La Romaine and Pakuashipi
          are not included in the MRC.
        </Text>
      </View>

      <View>
        <Text style={tw`text-black`}>
          Its land area covers 40, 818.99 square kilometres and its total area
          (including water) is about double that, at 81, 028.41 square
          kilometres. Its population in 2018 was 3891 (5200 if we were to count
          the two &quot;missing&quot; villages).
        </Text>
      </View>

      <View>
        <Text style={tw`text-black`}>
          From a geological point of view, most of the Lower North Shore (La
          Romaine, Mecatina, Baie-des-Moutons, Saint-Augustin) is part of the
          Canadian Shield. A tiny part of its eastern territory (Brador,
          Forteau, Blanc-Sablon) is part of the St. Lawrence Lowlands.
        </Text>
      </View>

      <View>
        <Text style={tw`text-black`}>
          The Canadian Shield is made up of hard rocks that are more than a
          billion years old. The Lowlands are made up of younger rocks (only
          half a billion years old!) and they are remarkable because of their
          obvious layers: arenite, sandstone, limestone, dolomite.
        </Text>
      </View>

      <View>
        <Text style={tw`text-black`}>
          Located in the north and swept by high winds, the Lower North Shore is
          subject to a continental climate with a coastal influence that some
          people also call a “maritime climate”. The influence of the Labrador
          Current, which is a cold current entering through the Strait of Belle
          Isle, makes for a harsh climate with short, humid summers and long
          winters with little snowfall. There are smaller temperature
          differences between seasons here than there are further inland. And,
          as you know, the wind seems to blow constantly!
        </Text>
      </View>
      <Text style={tw`text-green-500`}>Topography</Text>
      <Text style={tw`text-green-500`}>Inland</Text>

      <View>
        <Image
          style={{width: 150, height: 150}}
          source={{
            uri: 'https://media.miaexplore.com/images/Taiga_and_bedrock.jpg',
          }}
        />
        <Text style={tw`text-black`}>
          The interior of the Lower North Shore is made up of numerous rounded
          hills that have a maximum altitude of 600m. Many lakes and rivers run
          through the territory. There are more than a hundred rivers, including
          at least 20 large ones such as Petit-Mécatina, Saint-Augustin,
          Saint-Paul&apos;s, Olomane, Musquaro and Etamamiou. There are lots of
          fish here, including salmon, sea trout and other kinds of fish.
        </Text>
      </View>
      <Text style={tw`text-green-500`}>Coastal</Text>

      <View>
        <Image style={{width: 150, height: 150}} source={image1} />
        <Text style={tw`text-black`}>
          The coast is mostly formed by rocky outcrops called “mornes” by the
          locals. The last ice age left numerous loose deposits. Along with the
          many islands and archipelagos spread out along the coastal strip, they
          create a sort of buffer zone between the sea and the land.
        </Text>
      </View>

      <View>
        <Text style={tw`text-black`}>
          A typical term in the language of the people of the Lower North Shore
          is “rigolet” (Côté, Lower North Shore. A Region to Discover, 2017). It
          refers to safe maritime rocky passages that are found everywhere,
          making inland navigation practicable.
        </Text>
      </View>
      <Text style={tw`text-green-500`}>
        Seasonal Occupation - What is the opposite of Snowbird?
      </Text>

      <View>
        <Text style={tw`text-black`}>
          It was not uncommon on the Lower North Shore to have a winter
          residence in a village alongside other settlers, and then to have one
          or more separate summer residences where people would fish and gather
          for the upcoming winter. This phenomenon of seasonal living is called
          “transhumance”. There are still many of these summer places in use
          today, though they are used as much for rest, relaxation and
          recreation, as for fishing, hunting and gathering. Even though some of
          the summer residences have been abandoned, they are still very much
          part of the geography and the folklore of the region. From east to
          west, they include: Jones Harbour, Five Leagues and Little Fishery,
          Salmon Bay, Chécatica, Barrel Island, Duke&apos;s Island, Pacachoo,
          Kékarpoui, Baie-de-la-Terre, Salt Lake, Grosse-Île, Sholiaban, Kenty
          Island, Winter portage, Aylmer Sound, Barachois, Pointe au Maurier,
          Watagheistik, Etamamiou, Wolf Bay, Coacoachou, Washicoutai, Musquaro.
        </Text>
      </View>
      <Text style={tw`text-green-500`}>Fauna</Text>

      <View>
        <Text style={tw`text-black`}>
          The interior of the Lower Coast does not host a wide variety or a vast
          number of animals. Small and medium-sized mammals such as hares and
          beavers are fairly common, as well as birds of the partridge family
          and various species of lake ducks. They are highly appreciated by
          small game hunters! Though woodland caribou are not as plentiful as
          they once were, moose were introduced a few decades ago and they
          thrive in the area.
        </Text>
      </View>

      <View>
        <Text style={tw`text-black`}>
          Arctic fur-bearing animals are sometimes observed on the Lower North
          Shore. Polar bears or Arctic foxes sometimes come near the coastal
          villages in search of food on the spring ice. However, these animals
          do not live in the territory.
        </Text>
      </View>
      <Text style={tw`text-green-500`}> The Black Bear</Text>

      <View>
        <Image style={{width: 150, height: 150}} source={image1} />
        <Text style={tw`text-black`}>
          Considered a nuisance species, black bears are rarely hunted for their
          skin or meat. However, for the Innu people, they are a mythical
          animal. In winter, they sleep deeply in their den and their body
          temperature drops by a few degrees. Adult males weigh between 115 and
          270 kg. Females weigh between 92 and 140 kg. Black bears have not been
          seen on Anticosti Island since the 1970s and 80s.
        </Text>
      </View>
      <Text style={tw`text-green-500`}> The Wolf</Text>
      <View>
        <Image style={{width: 150, height: 150}} source={image1} />
        <Text style={tw`text-black`}>
          Canada lynxes are medium-sized North American lynxes that feed
          exclusively on snowshoe hares. They lead a secretive existence and are
          rarely observed, even by experienced hunters. They can run fast over
          short distances, but they tire quickly, so they must stalk their prey
          or wait for it while staying hidden in the underbrush. Thanks to their
          large feet, they can move easily through the snow.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>The Lynx</Text>

      <View>
        <Image style={{width: 150, height: 150}} source={image1} />
        <Text style={tw`text-black`}>
          Canada lynxes are medium-sized North American lynxes that feed
          exclusively on snowshoe hares. They lead a secretive existence and are
          rarely observed, even by experienced hunters. They can run fast over
          short distances, but they tire quickly, so they must stalk their prey
          or wait for it while staying hidden in the underbrush. Thanks to their
          large feet, they can move easily through the snow.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>The Red Fox</Text>

      <View>
        <Image style={{width: 150, height: 150}} source={image1} />
        <Text style={tw`text-black`}>
          Red foxes are not always red. Indeed, It is not uncommon to find brown
          or black ones. We commonly call red foxes &quot;silver foxes&quot;
          because their base colour can be black with white colouring at the
          tips of their fur. Adult foxes weigh from 3.6 to 6.8 kg and measure
          from 90 to 112 cm from the tip of its muzzle to the tip of its tail
          (which counts for one third of its total length). Because fox fur was
          highly prized at the beginning of the 20th century, they were bred in
          captivity by Johan Beetz in Minganie, and also by the Menier family in
          Anticosti.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>The Beaver</Text>

      <View>
        <Image style={{width: 150, height: 150}} source={image1} />
        <Text style={tw`text-black`}>
          Beavers were hunted for their pelts, which for a long time were the
          most prized in the country. In some places along the North Shore,
          non-native beavers were even introduced to the native population to
          increase their overall abundance. Beavers prefer to gnaw on aspen
          trees for food. They have poor vision and come out of their dens at
          dawn and at dusk.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>The American Marten</Text>

      <View>
        <Image style={{width: 150, height: 150}} source={image1} />
        <Text style={tw`text-black`}>
          Martens prefer old-growth coniferous or mixed forests, although they
          sometimes forage in open areas. They are active for about 16 hours a
          day in spring and summer. They are agile climbers, but they catch
          almost all of their prey on the ground. Members of the weasel family,
          they are known to be very curious. In winter, their beautiful fur
          takes on a dark brown hue and their throats are marked with a glossy
          orange patch. Their summer coats are lighter and much thinner.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>The Muskrat</Text>

      <View>
        <Image style={{width: 150, height: 150}} source={image1} />
        <Text style={tw`text-black`}>
          Muskrats get their name from the fact that they secrete a yellowish,
          musky-smelling substance that spreads at intervals along their tracks.
          It is thought to be a means of communication. Muskrats have incisors
          in front of their jowls and lips, which close behind them, thereby
          allowing them to gnaw on stems and roots underwater while keeping
          their mouths closed. They use their back legs like oars when they
          swim.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>The Snowshoe Hare</Text>
      <View>
        <Text style={tw`text-black`}>
          Snowshoe hares have a brown coat in summer and white coat in winter.
          They can move up to 3 metres in a single bound and can travel at
          speeds up to 45 km/h. A colony can become very large: 500 to 600
          individuals per square kilometre. Hares live in all provinces of
          Canada. Their coats are composed of three layers of hair. An adult
          snowshoe hare usually weighs 1.2 to 1.6 kg. Females, called “hases”,
          are often slightly larger than the males.
        </Text>

        <Image style={{width: 150, height: 150}} source={image1} />
      </View>

      <Text style={tw`text-green-500`}>The American Porcupine</Text>
      <View>
        <Text style={tw`text-black`}>
          Porcupines lead a solitary existence for most of the year. They chew
          on wood, leather, dead animal bones, and fallen antlers in the fall.
          Porcupines are born with sharp quills, about 30,000 quills on each
          porcupine. The quills can stand up a few hours after birth. Adult
          males reach an average weight of 5.5 kg after 6 years and females
          weigh in at approximately 4.5 kg. Their length ranges from 68 cm to
          100 cm and their height at the shoulder is about 30 cm. There are no
          porcupines on Anticosti.
        </Text>

        <Image style={{width: 150, height: 150}} source={image1} />
      </View>

      <Text style={tw`text-green-500`}>The Eastern Chipmunk</Text>
      <View>
        <Text style={tw`text-black`}>
          Eastern chipmunks go back and forth to hide their food, often
          forgetting where their hiding places are! Squirrels and chipmunks are
          found in most inhabited areas of southern and northern Quebec but they
          are totally absent from Anticosti Island, which is a rare occurrence.{' '}
        </Text>
        <Image style={{width: 150, height: 150}} source={image1} />
      </View>

      <Text style={tw`text-green-500`}>Cervids</Text>
      <Text style={tw`text-green-500`}>The White-Tailed Deer</Text>
      <Image style={{width: 150, height: 150}} source={image1} />
      <View>
        <Text style={tw`text-black`}>
          White-tailed deer are a well-known species on Anticosti Island, where
          they were introduced between 1896 and 1913. Each year, hunters kill
          between 7000 and 8000 deer there.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>The Moose</Text>
      <Image style={{width: 150, height: 150}} source={image1} />
      <View>
        <Text style={tw`text-black`}>
          Moose, the largest member of the deer family, can weigh up to 800 kg.
          Their antlers can spread over 180 centimetres. They can dive to a
          depth of more than five meters to feed, and run at more than 50 km/h.
        </Text>
        <Text style={tw`text-black`}>
          On the Lower North Shore, the moose population has only been really
          abundant since the 1960s. About twenty moose were introduced to
          Anticosti Island during the time of Henri Menier (1896-1913) but their
          number currently remains low.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>The Woodland Caribou</Text>
      <Image style={{width: 150, height: 150}} source={image1} />
      <Text style={tw`text-green-500`}>
        The Innu, &quot;People of the caribou&quot;, passed on the art of
        hunting this animal to the Europeans.
      </Text>
      <View>
        <Text style={tw`text-black`}>
          Caribou is the only member of the cervidae family whose males and
          females both have antlers. They feed mostly on lichen, a moss-like
          plant, and they are the most northern of their species. In Europe,
          they are called reindeer. There are different types of caribou. Only
          the woodland caribou is normally found on the Lower North Shore, as
          opposed to the migratory caribou that are well known in the
          Fermont-Schefferville region (the George River herd).
        </Text>
        <Text style={tw`text-black`}>
          Woodland caribou live scattered in peat bogs or coniferous forests.
          They are mainly found in the interior of the Lower North Shore.
          Several witnesses in the past have noted their presence in the
          vicinity of St-Augustin, Saint-Paul&apos;s River, and in the
          Blanc-Sablon and Brador sectors. They are in decline almost
          everywhere. Their current population density is less than 1
          caribou/100 km2, leading to concern for their survival. Fall hunting
          of caribou, which was allowed for a long time, is now prohibited.
        </Text>

        <Text style={tw`text-black`}>
          A hundred years ago, Dr. Grenfell, a doctor who helped the fishermen
          of the region, decided to breed Lapland reindeer, a cousin of the
          woodland caribou, as an opportunity to alleviate the misery of the
          people. A herd of more than 100 reindeer was established east of St.
          Paul&apos;s River, under the care of Lapp guides, in order to provide
          milk, meat and hides to the inhabitants.
        </Text>

        <Text style={tw`text-black`}>
          However, the plan failed because people still preferred to hunt by
          dogsled. A few years later, the herd was sold to the owner of
          Anticosti and the Lapp guides returned to Norway.
        </Text>
      </View>
      <Text style={tw`text-green-500`}>Birds</Text>
      <View>
        <Text style={tw`text-black`}>
          We can find over 100 species of birds on the Lower North Shore. Since
          1925, bird sanctuaries have been created there to protect species from
          extinction: Puffins, Razorbills, Common Murres (Turs), Black
          Guillemots, among others. Other species that frequent the territory
          are the Brent Goose, Sea-ducks or Diving-ducks such as the Common
          Eider and the King Eider, different species of Buffleheads and
          Long-tailed Ducks. There are also Plovers, Sandpipers, Blackbirds,
          Turnstones, and other shorebirds that roam the beaches and salt
          marshes from July to November. Seabirds spend long periods of time off
          the coast, especially between Saint-Augustin and Blanc-Sablon.
          inhabitants.
        </Text>

        <Text style={tw`text-black`}>
          As for forest birds, we see lake ducks including Green-winged Teal,
          Black Ducks, Shovelers and Mallards, Canada Geese, Finches, Sparrows,
          and Warblers. Also noteworthy are Chickadees, Nuthatches, Kinglets,
          Slate Juncos, Pine Durbecs, Bifaciate Crossbills, etc.. Among the
          larger birds, we can name the owls: Great Horned Owls and Middle Owls,
          American Crows and Great Ravens; as well as the few raptors, such as
          Ospreys, Hen Harriers, Hawks, Buzzards and Falcons. inhabitants.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>Bird Sanctuaries</Text>
      <View>
        <Image style={{width: 150, height: 150}} source={image1} />
        <Text style={tw`text-black`}>
          In the early 1800s, the egg trade became very popular on the Lower
          North Shore and by 1820, many of the rich bird colonies on the islands
          were on the brink of extinction. Hundreds of thousands of eggs were
          harvested and sold in markets in the Maritimes and eastern United
          States. In 1840, as many as 750,000 Turr eggs from the Lower North
          Shore were sold in the Halifax market! Something had to be done in the
          name of conservation, and therefore bird sanctuaries were created to
          protect certain species at risk. Also known as MBS (Migratory Bird
          Sanctuaries), 5 sanctuaries are currently present on the Lower North
          Shore:
        </Text>

        <Text style={tw`text-black`}>
          The Île-à-la-Brume Refuge : 38 square kilometres of land and sea
          located east of the village of La Romaine to protect the Caspian Tern,
          a bird belonging to the gull family, which has been under threat since
          2009.
        </Text>

        <Text style={tw`text-black`}>
          The Île-à-la-Brume Refuge : 38 square kilometres of land and sea
          located east of the village of La Romaine to protect the Caspian Tern,
          a bird belonging to the gull family, which has been under threat since
          2009.
        </Text>
        <Text style={tw`text-black`}>smaller numbers.</Text>

        <Text style={tw`text-black`}>
          The St. Mary&apos;s Islands Sanctuary : 40 square kilometres with its
          islands and seashore, it is one of the richest sanctuaries in the Gulf
          of St. Lawrence. It is located west of the villages of Chevery and
          Harrington Harbour. Thousands of birds nest there, with 14 different
          species of marine birds. The Common Mure (“Turr”) has the largest
          population, with over 20,000 birds. The Razorbill (“Thinker”) follows
          with about 3,000 birds. In lesser proportions, Common Eiders,
          Double-crested Cormorants, Great Cormorants, Black Guillemots,
          Red-throated Loons, Herring Gulls and Black-legged Kittiwakes are
          fairly well represented. Leach&apos;s Storm-Petrels and Thick-billed
          Murres, which used to nest here, seem to have left the area.
        </Text>

        <Text style={tw`text-black`}>
          The Saint-Augustin Migratory Bird Sanctuary: With an area of 49 square
          kilometres, this sanctuary is the largest on the Lower North Shore.
          Located southeast of St-Augustin, it hosts 7 different species.There
          are the three species of gulls (the Great Black-backed Gull, the
          Herring Gull and the Ring-billed Gull) along with the Common Eider,
          the Razorbill, the Black Guillemot and the Common Tern, which nest
          there in season.
        </Text>

        <Text style={tw`text-black`}>
          The Refuge de la Baie-de-Brador: A relatively small 5.59 square
          kilometres of protected area exists for 10,000 pairs of Atlantic
          puffins, which is the largest colony in Quebec. These &quot;sea
          parrots&quot; can be seen opposite Brador&apos;s Parrot Island and on
          Greenly Island. The refuge is said to have had up to 25,000 pairs of
          puffins in the 1950s, as well as a larger number of Razorbills
          (currently 500 pairs). Herring and Great Black-backed Gulls, and Black
          Guillemots also nest here.
        </Text>
      </View>

      <Text style={tw`text-green-500`}>Flora</Text>
      <Text style={tw`text-green-500`}>Forest Tundra</Text>
      <View>
        <Text style={tw`text-black`}>
          Along the coastline, from about Natasquan to Old Fort, there is
          shrub-like forest tundra, about 30 km deep, which is composed mainly
          of moss and lichen, with patches of coniferous forests in the more
          sheltered sites. Black spruce is the main species, but it does not
          grow much taller than 3 metres, even when 100 years old! This area
          constitutes a transition between the boreal zone, to which it belongs,
          and the arctic zone marked by shrub and herbaceous formations, High
          humidity and small temperature differences limit the length of the
          growing season.
        </Text>
        <Text style={tw`text-black`}>
          Further inland, the forest tundra gradually gives way to boreal
          forest, which contains a mix of black and white spruce, fir, larch and
          birch. However, soil type, elevation, winds and climate influence the
          diversity and abundance of particular types of trees.
        </Text>
        <Text style={tw`text-black`}>
          Further inland, the forest tundra gradually gives way to boreal
          forest, which contains a mix of black and white spruce, fir, larch and
          birch. However, soil type, elevation, winds and climate influence the
          diversity and abundance of particular types of trees.
        </Text>

        <Text style={tw`text-green-500`}>Spruce-Lichen Taiga Subzone</Text>
        <Text style={tw`text-green-500`}>
          {' '}
          To the North of the forest tundra, there is a forest composed mainly
          of black spruce. In the southern part of the forest, we also find
          balsam fir, white birch, aspen and balsam poplar. Small shrubs cover
          the area: Labrador tea, kalmia, various species of blueberries. In the
          north and extreme east, the forest is more sparse and the species more
          stunted.
        </Text>

        <Text style={tw`text-green-500`}>Rare Plants</Text>
        <Text style={tw`text-green-500`}>
          {' '}
          There are 350 species of rare plants growing in the region, and some
          sectors (Blanc-Sablon, Forteau) boast about 50 of them! These plants
          are considered rare because they belong to the common flora of the
          North Shore and boreal Quebec or to so-called arctic species. Some
          examples are wormwood, alpine azalea, red camarine, gentian, common
          sowthistle, meadow barley, pink thistle, hairy thistle, arctic
          bluegrass, and Greenland primrose.
        </Text>

        <Text style={tw`text-green-500`}>
          {' '}
          The flora of the Lower North Shore is so diverse that it has long been
          used not only for cooking, but also in some cases, to make
          pharmaceutical products.
        </Text>
      </View>
      <Text style={tw`text-green-500`}>Berries</Text>
      <Image style={{width: 150, height: 150}} source={image1} />
      <View>
        <Text style={tw`text-black`}>
          The bakeapple or cloudberry is the best known berry on the North
          Shore. From the same family as roses, it grows in high peat bogs,
          humid and acidic areas poor in minerals, or on the edge of black
          spruce and fir forests. Since the 1990s, the creation of a liqueur,
          among other products, has made it even more popular in Quebec.
        </Text>

        <Image style={{width: 150, height: 150}} source={image1} />
        <View>
          <Text style={tw`text-black`}>
            The common blueberry , the narrow-leaved blueberry and at least 3
            other species, including the so-called savannah or wild blueberry,
            grow in the coastal zone of the Lower Shore. Some people also call
            it “bushberry”, probably because it sometimes forms bushes.
          </Text>
        </View>

        <Image style={{width: 150, height: 150}} source={image1} />
        <View>
          <Text style={tw`text-black`}>
            The redberry or partridgeberry is present but not very abundant in
            the area. It is a highly appreciated fruit that has long been
            incorporated into the region&apos;s pastries. The crowberry , which
            is lesser known, can be either black or red. Crowberries are made
            into jams or pies.
          </Text>
        </View>

        <Image style={{width: 150, height: 150}} source={image1} />
        <View>
          <Text style={tw`text-black`}>
            The common blueberry , the narrow-leaved blueberry and at least 3
            other species, including the so-called savannah or wild blueberry,
            grow in the coastal zone of the Lower Shore. Some people also call
            it “bushberry”, probably because it sometimes forms bushes.
          </Text>
        </View>

        <Image style={{width: 150, height: 150}} source={image1} />
        <View>
          <Text style={tw`text-black`}>
            The redberry or partridgeberry is present but not very abundant in
            the area. It is a highly appreciated fruit that has long been
            incorporated into the region&apos;s pastries. The crowberry , which
            is lesser known, can be either black or red. Crowberries are made
            into jams or pies.
          </Text>
        </View>
      </View>
    </View>
  );
}
