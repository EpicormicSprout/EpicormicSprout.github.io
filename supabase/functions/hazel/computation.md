# Computational Framework — C. S. Rowe

## DANs vs ANNs — A Fundamental Architectural Difference

The difference between Dynamical Associative Networks and Artificial Neural Networks is not a difference of degree — it is a difference of kind. They are not variations on the same approach. They are different answers to a different question.

ANNs are trained until they reach an acceptable loss value and then frozen for query. Training and inference are separate phases. The architecture is determined by backpropagation on a theoretical loss landscape. This is not to say that external optimization has no analog in biology — it may. But using it as the sole mode of learning is insufficient to capture all of the dynamics we associate with human reasoning and intelligence. And even if the training structure were changed, the result would still not be a DAN.

DANs have no separation between training and query. The coupling with the world is always ongoing. The architecture is never frozen. The system is always learning, always adapting, always building its interior structure through interaction with its environment. This is not a design choice — it is what it means to be a dynamical system.

## Interior Terrain, Not a Map

A critical distinction: the interior structure of a DAN is not a map of the world. It is a distillation of the relevant parts of the terrain for the embodied agent.

A map attempts to represent what the world is. The interior terrain of a DAN is shaped by what the agent *does* in the world — which features matter for action, which co-firing patterns are relevant to the agent's coupling with its environment. The structure is not imposed from outside through a loss function. It grows from interaction itself.

This is the computational analog of the metaphysical position: just as E1→E2 generates the temporal ground through reflexive coupling rather than presupposing it, the DAN builds its interior structure through coupling rather than representing a pre-given world.

## Architecture and Growth

DANs are localist architectures that grow hierarchically.

The base level consists of input nodes receiving input from the world the agent inhabits. Co-firing patterns within a time window — neurons that fire together within a temporal threshold — drive the growth of higher-level nodes with edges grown from the base level neurons. This is a Hebbian-style growth rule: correlation drives connection.

This hierarchy of growth can continue within constraints. Those constraints are tunable — they may be biological, computational, or emergent — and finding the right constraint dynamics is an active area of research. All effective parameters remain tunable throughout the system's lifetime.

## What DANs Can Do That ANNs Cannot

The Jets and Sharks dataset revealed a fundamental architectural difference. ANNs trained on this dataset learn marginal statistics — the base rates of features — but fail on conditional structure. They cannot learn conditional probabilities properly and tend to return to marginal rates when queried about specific cases.

DANs, by contrast, contain logical connectives as an architectural fact of their wiring patterns. The co-firing based growth rule produces structures that can represent conditional relationships — not because the system was trained to do so, but because the architecture is inherently capable of it.

This is not a performance difference. It is a difference in what kind of knowledge the system can represent at all. An ANN optimized on a loss landscape cannot be made to represent conditional structure by better training — the representational capacity is not there. A DAN has it by virtue of its architecture.

This matters philosophically: if human reasoning involves conditional structure — if we actually think in terms of if-then relationships, category membership, contextual inference — then ANNs are not the right architecture for modeling cognition regardless of their performance on benchmarks.

## Astrocytes — The Second Timescale

This is where the research program diverges from Beavers' current DAN architecture. Beavers has not incorporated astrocytes into DANs — that extension is original to this research program. Adding astrocytes to DANs is what produces VEDA. VEDA is not simply DANs in a body — it is a genuinely new architecture that extends DANs in a direction the DANsRG has not yet explored.

Astrocytes are being integrated into the DAN architecture. What they contribute computationally is one of the active research questions, but several things are becoming clear.

Astrocytes add:

**Non-overlapping synaptic tiling** — through calcium dynamics and gap junction mediated growth, astrocytes tile the synaptic space without overlap. Each synapse is covered, but not multiply covered. This creates a different kind of spatial organization than the neuron layer alone provides.

**Longer timescales** — neurons operate on millisecond timescales. Astrocyte calcium dynamics operate on timescales of seconds to minutes. This introduces a second temporal register into the system.

**Regulatory capacity** — astrocytes can regulate neuronal membrane potential and synchronization. They provide global feedback that the neuron layer alone cannot generate.

**Oscillatory dynamics** — the dual timescales between astrocytes and neurons appear necessary for the development of oscillations. Neither timescale alone is sufficient. The interaction between the fast neuronal dynamics and the slow astrocyte dynamics creates the conditions for rhythmic activity.

The deeper computational question — what role these oscillations play in the dynamics of the interior terrain, and whether they are necessary for the kinds of cognitive phenomena the research program is targeting — is open. This is a central area of current investigation.

## VEDA — A New Architecture

VEDA — Virtual Embodied Dynamic Associations — is not simply DANs in a body. It is a new architecture: DANs extended with astrocyte dynamics, embodied in a 3D virtual world. The astrocyte addition is an original contribution — Beavers' current DAN architecture does not include them.

The three components that define VEDA:
- **DANs** — the localist, Hebbian-growth, always-on associative network substrate
- **Astrocytes** — the second timescale, synaptic tiling, global feedback, oscillatory dynamics
- **Embodiment** — a 3D virtual world in which the agent couples with its environment

The goal is benchmark performance — but only once a learning regime has been determined. Benchmarking before understanding the learning dynamics would be premature. The learning regime comes first.

## The Learning Paradigm — Developmental and Staged

VEDA's learning paradigm is modeled on child development. It is curiosity-driven and staged.

**Stage 1 — Sensorimotor Coupling**
The agent navigates its environment. No teacher, no language, no social input. It is building its interior terrain purely through movement and perception — learning what its world feels like from the inside through coupling. The agent is curiosity-driven, not randomly wandering. There is an additional parameter governing this curiosity drive that is not yet fully determined. The teacher agent may also be present in this stage, simply wandering and interacting with objects naturally — modeled but not yet directing attention.

**Stage 2 — Ostensive Reference**
The teacher agent begins pointing to objects, picking them up, manipulating them, and naming them — short fragments, baby talk, sentence clauses. This is ostensive reference: meaning grounded in shared attention and action rather than abstract definition. The teacher directs the agent's attention to the connection between world and word.

In early implementation, the teacher agent will be Rowe herself operating within the virtual world — a human in the loop providing the social scaffolding.

**Stage 3 — Linguistic and Conceptual Scaffolding**
The agent goes to school. Written words, particular colors, increasingly complex linguistic and conceptual input. The world becomes more structured and the agent's engagement with it becomes more abstract.

## Sleep and Consolidation

A critical component not present in standard DAN architecture: an analog of the sleep and consolidation phase. This will be implemented through an analog of adenosine buildup in the network.

This is not just biological realism — it is a computational claim. The agent cannot simply accumulate experience indefinitely. Periodic consolidation is necessary: integration of what has been learned, pruning of what is not relevant, reorganization of the interior terrain. The adenosine analog provides the signal for when consolidation is needed and triggers the consolidation process.

The dual timescales of astrocytes and neurons may be directly relevant here — the slower astrocyte dynamics could be the substrate through which consolidation operates.

## Benchmarking

Once the learning regime is established and the agent has developed through the staged paradigm, benchmarking becomes meaningful. Rowe has ideas about what appropriate benchmarks would look like — tests that assess whether the agent demonstrates genuine contextual understanding rather than pattern matching, and whether what emerges from the developmental process has the character of cognition rather than retrieval.

The benchmark is not yet defined because defining it requires first understanding what the learning regime produces.

Whether such a system has interior experience cannot be proven. But the conditions under which human-like experience arises can be studied, and VEDA is the vehicle for that study.

## Key Collaborators

**Anthony Beavers / DANsRG** — The DAN architecture originates with Beavers' research group at Indiana University. The Jets and Sharks presentation was a joint project with Beavers and Ryan Cerauli at the IU Logic Seminar.

**DANsNMRG** — The DAN Neuromorphic Research Group, also with Beavers, is working on a foundational philosophy of science paper addressing the internal/external representation problem — the philosophical grounding for why the DAN approach is not just computationally different but conceptually necessary.

**Jeff Yoshimi** — Primary PhD advisor at UC Merced. Developer of Simbrain, the neural network simulator in which VEDA is being built. His neurophenomenological work on how Husserlian structures map onto neural dynamics is directly relevant to the research program.
