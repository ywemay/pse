import React from 'react';
import Markdown from 'react-markdown'

const textPrev = `
**Preamble**

We, the people of Planet Earth, united by our common humanity and mutual support, hereby establish this Constitution to ensure the prosperity, happiness, and well-being of all individuals within our global community.

**Article I: General Principles**

1. The fundamental right to existence is guaranteed for every individual, regardless of their origin, culture, or identity.
2. The principles of cooperation, mutual aid, and self-governance shall guide our collective decisions and actions.
3. Our economy is based on abundance, where technology provides for the needs of all, eliminating scarcity and ensuring that everyone's basic requirements are met.

**Article II: Human Rights**

1. **Right to Existence**: Every individual has the right to exist, thrive, and contribute to society without fear of poverty, hunger, or thirst.
2. **Freedom from Toil**: No one shall be compelled to work against their will or in circumstances that threaten their physical or mental well-being.
3. **Access to Knowledge and Education**: All individuals have the right to access education, information, and knowledge, which is free from manipulation and biased influence.
4. **Healthcare and Well-being**: Every individual has access to high-quality healthcare, including preventive care, medical treatment, and emotional support.
5. **Cultural and Spiritual Expression**: The right to express one's culture, spirituality, and identity without fear of persecution or marginalization is guaranteed.

**Article III: Economic Framework**

1. **Post-Scarcity Economy**: Our economy operates on a post-scarcity principle, where technology ensures that every individual's basic needs are met.
2. **Resource Management**: A global resource management system ensures the equitable distribution and allocation of resources, prioritizing the well-being of individuals and the planet.
3. **Cooperative Ownership**: Enterprises and institutions are owned cooperatively by their stakeholders, ensuring decision-making is democratic and responsive to community needs.

**Article IV: Governance**

1. **Global Assembly**: A global assembly represents the people, with each member chosen through a direct democracy process, ensuring equal participation and representation.
2. **Decentralized Decision-Making**: Decentralized systems facilitate local governance, allowing communities to make decisions that best suit their unique needs and circumstances.
3. **Conflict Resolution**: Alternative dispute resolution mechanisms prioritize mediation, negotiation, and empathy over adversarial processes.

**Article V: Environmental Stewardship**

1. **Ecological Balance**: Our economy is designed to maintain ecological balance, preserving the health of our planet for future generations.
2. **Sustainable Practices**: Every individual has a responsibility to adopt sustainable practices, minimizing waste and promoting environmental stewardship.
3. **Conservation and Preservation**: Natural resources are managed sustainably, with conservation efforts prioritizing biodiversity and ecosystem preservation.

**Article VI: Education and Personal Growth**

1. **Lifelong Learning**: Education is a lifelong process, with opportunities for personal growth, skill development, and knowledge acquisition available to all.
2. **Skill Development**: Every individual has access to training and resources that enable them to develop their skills and contribute to society in meaningful ways.
3. **Personal Fulfillment**: We recognize the importance of personal fulfillment, creativity, and self-expression in achieving a happy and fulfilling life.

**Article VII: Conclusion**

We, the people of Planet Earth, commit to upholding this Constitution as a living document, guiding our collective efforts to create a world where every individual can thrive. Together, we shall build a brighter future for all humanity.

This constitution serves as a foundation for a post-scarcity society, emphasizing cooperation, mutual support, and the well-being of individuals and the planet. It provides a starting point for a global community that values human rights, ecological balance, and personal growth. 
`;

const text = `Here's an adapted constitution that reflects the agreed-upon principles:

**Earth and Universal Common Patrimony Constitution**

**Preamble**

We, the people of Earth and the universe we inhabit, united by our shared humanity, hereby establish this Constitution to ensure the prosperity, happiness, and well-being of all individuals within our global community.

**Article I: Principles of Human Interaction**

1. **Golden Rule**: Treat others as closely as possible to the way you want to be treated.
2. **Self-Defense**: In case of being attacked, defend yourself, causing only strictly necessary damage to eliminate the threat while respecting the other's right to live.
3. **Logical and Scientific Thinking**: Learn and use logic, train yourself to spot logical fallacies, and employ the scientific method in all aspects of life.

**Article II: Access to Resources**

1. **Common Patrimony**: All Earth's resources and those accessible in space are considered common patrimony for all humans.
2. **Sharing and Cooperation**: Share space and objects when and where applicable, promoting cooperation and mutual aid.
3. **Automation and Production**: Utilize automation of production and distribution of goods and services to ensure efficiency and fairness.

**Article III: Conflict Resolution**

1. **Emergent Democracy**: Employ emergent democracy as a tool for social administration, fostering participatory decision-making and conflict resolution.
2. **Conflict Resolution Strategies**: In conflict situations, seek solutions that bridge differences between parties, prioritizing cooperation over competition.
3. **Logical Dispute Resolution**: Use logical reasoning to resolve disputes, avoiding emotional or coercive approaches.

**Article IV: Human Interdependence**

1. **Interconnectedness**: Recognize the interconnectedness of humanity and the environment, striving for mutual support and well-being.
2. **Cooperation and Collaboration**: Work together with other humans to ensure the survival and advancement of our species.
3. **Environmental Stewardship**: Maintain a clean and suitable environment for human life, utilizing technology to minimize waste and maximize sustainability.

**Article V: Access to Knowledge**

1. **Open-Access Knowledge**: Share knowledge widely, making it easily accessible to all humans through transparent and open-access platforms.
2. **Technological Advancement**: Utilize technology to improve the lives of all individuals, prioritizing accessibility and equity.
3. **Continuous Learning**: Foster a culture of continuous learning, encouraging individuals to adapt and evolve in response to changing circumstances.

**Article VI: Final Provisions**

1. **Adaptability and Flexibility**: Remain adaptable and flexible in the face of new challenges and opportunities, embracing the evolving nature of human society.
2. **Humanity's Shared Destiny**: Recognize that our individual fates are intertwined with the fate of humanity as a whole.

**Article VII: Conclusion**

We, the people of Earth and the universe we inhabit, commit to upholding this Constitution as a living document, guiding our collective efforts to build a harmonious and prosperous future for all humans.`

function Constitution() {

  return (
    <div className="page">
      <h1>Constitution of Humans of Planet Earth.</h1>

      <p><b>Version 0.0.0</b></p>

      <p>Disclaimer: this version is highly rudimentary and opinionated.</p>

      <ol>
        <li>All Earth's resources and resources of spaces in Universe where Humanity may reach, are common patrimony of all Humans.</li>
        <li>Treat others as closely as possible to the way you want to be treated.</li>
        <li>Carry any tools you need, including lethal guns and ammunition.</li>
        <li>In case of being attacked defend yourself. Cause only strictly necessary damage to eliminate the threat, respect other's right to live.</li>
        <li>Learn and use logic. Train yourself be able to spot logical fallacies.</li>
        <li>Learn and use scientific method.</li>
        <li>In conflict situations seek to find solutions to resolve the conflict. Always seek to bridge differences between conflicted parties.</li>
        <li>Use emergent democracy as tool of social administration.</li>
        <li>Share space and objects when and where applicable.</li>
        <li>Work and cooperate with other humans to ensure the survival of humanity.</li>
        <li>Maintain the environment clean and suitable for human life to the best of your abilities.</li>
        <li>Learn and use automation of production and distribution of goods and services.</li>
        <li>Put the technology to the use of all humans. Share the knowledge - make it easy to access for other humans.</li>
      </ol>
      <Markdown>{text}</Markdown>
    </div>
  );
}

export default Constitution;