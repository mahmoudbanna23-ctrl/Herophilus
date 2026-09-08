// Grade Gain — Psychiatry topic 22 "Substance-related Disorders & Psychopharmacology", Q146–Q153 (SECOND HALF).
// EIGHT entries, ids npqb-ps-146 … npqb-ps-153.
// Boxed (printed Explanation, NO authored marker): Q147, Q151, Q153 = 3.
// Authored markers: Q146, Q148, Q149, Q150, Q152 = 5.
//   3 + 5 = 8.
// Chapters assigned by the stem: ps-sud on Q146 and Q147 (opioid withdrawal and its treatment);
//   ps-pharm on Q148–Q150 and Q153 (discontinuation, serum range and receptor mechanisms);
//   ps-emerg on Q151 (NMS emergency); ps-mood on Q152 (recurrent depression management).
// Questions: book p.90. Answers: book p.91. Text and answer indices follow GG_PS_T22_STAGED.
// Lecture citations checked against content/neuro/lectures/ transcriptions.
// Additional teaching is labelled inline; unresolved claims are retained for human review.
// Output is draft data awaiting a human check.

var GG_PS_T22_DRAFT_B = [
  {
    "id": "npqb-ps-146",
    "bank": "gradegain",
    "module": "neuropsych",
    "chapter": "ps-sud",
    "stem": "A 30-year-old heroin user complains of lacrimation, rhinorrhea, and diarrhea 24 hours after last use. What is the diagnosis?",
    "options": [
      "Opioid intoxication",
      "Opioid withdrawal",
      "Serotonin syndrome",
      "Alcohol withdrawal"
    ],
    "answer": 1,
    "explanation": "The correct answer is **Opioid withdrawal**. The symptoms of lacrimation, rhinorrhea, and diarrhea appearing 24 hours after last heroin use are classic autonomic and gastrointestinal signs of opioid withdrawal syndrome. \n\nThe lecture deck `L15) substance related disorder and psychiatry emergency` covers opioid withdrawal as part of substance-induced disorders, listing withdrawal alongside intoxication as a primary presentation. The draft’s additional description is a noradrenergic surge with autonomic hyperactivity (e.g., rhinorrhea, lacrimation, diarrhea, diaphoresis), musculoskeletal aches and psychological distress (not taken from the course material). Its stated peak within 2-3 days of cessation is also not taken from the course material and awaits a human check; the staged vignette itself specifies 24 hours. \n\nAnalysis of incorrect options:\n\n| Option | Actual Concept | Why It Is Incorrect |\n| :--- | :--- | :--- |\n| **Opioid intoxication** | Presents with CNS depression, miosis, and respiratory depression (not taken from the course material). | The stem describes withdrawal symptoms (hyperactivity), not intoxication (sedation). |\n| **Serotonin syndrome** | Caused by excess serotonergic activity, featuring agitation, hyperthermia, clonus, and hyperreflexia (`L16) Emergency Psychiatry Critical Interventions`, serotonin toxicity sections). | Symptoms in the stem (lacrimation, rhinorrhea) are not characteristic; serotonin syndrome is related to antidepressants/serotonergic drugs, not opioid cessation. |\n| **Alcohol withdrawal** | Characterized by autonomic hyperactivity, tremor, and potentially seizures/delirium tremens. | While both are withdrawal states, the specific symptoms (rhinorrhea, diarrhea) are more typical of opioid withdrawal; alcohol withdrawal often includes hypertension, tachycardia, and hyperreflexia (this alcohol-withdrawal description is not taken from the course material). |\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
    "objective": "The question tests the recognition of the classic symptom cluster of opioid withdrawal.",
    "source": "neuropsychiatry & neurosurgery qb.pdf p.90 (answer p.91). The answer page prints the bare letter with no option name beside it, so the letter-versus-name cross-check was unavailable for this key.",
    "note": "The draft’s 2-3 days withdrawal peak is not taken from the course material and awaits a human check. The staged timing of 24 hours and age of 30-year-old are unchanged."
  },
  {
    "id": "npqb-ps-147",
    "bank": "gradegain",
    "module": "neuropsych",
    "chapter": "ps-sud",
    "stem": "Which medication is first-line for managing this condition?",
    "options": [
      "Naltrexone",
      "Acamprosate",
      "Methadone",
      "Bupropion"
    ],
    "answer": 2,
    "explanation": "The bank prints an explanation box for this question. **Transcribed verbatim as printed:**\n\n> Methadone, a long-acting opioid agonist, prevents withdrawal and cravings\n\nThe printed box names methadone as a long-acting opioid agonist that prevents withdrawal and cravings; it does not rank treatments. Methadone is the printed answer to this bank’s first-line question. The lecture `L15) substance related disorder and psychiatry emergency` supports this, stating that for less motivated patients, \"harm reduction\" can be done using methadone or buprenorphine, and describing methadone’s mu-opioid receptor occupancy and blockade of other opioids’ reinforcing effects. A separate bullet states: \"It prevents opiate withdrawal, blocks the effects of illicit opiate use, and decreases opiate craving.\" The stem refers to the condition in Q146 (opioid withdrawal), for which opioid agonist replacement is the standard pharmacological treatment to prevent withdrawal and reduce cravings.\n\nAnalysis of incorrect options:\n\n| Option | Actual Concept | Why It Is Incorrect |\n| :--- | :--- | :--- |\n| **Naltrexone** | A long-acting opioid antagonist used for relapse prevention after detoxification, not for managing acute withdrawal. | Requires the patient to be opioid-free first; using it in active withdrawal would precipitate severe withdrawal. It is for motivated patients in maintenance, not acute management. |\n| **Acamprosate** | L15 describes acamprosate as a GABA agonist used for alcohol dependence; craving reduction and maintenance of abstinence are additional teaching (not taken from the course material). | Indicated for alcohol use disorder, not opioid withdrawal. |\n| **Bupropion** | A norepinephrine-dopamine reuptake inhibitor (NDRI) antidepressant (the NDRI identification is not taken from the course material), also listed for smoking cessation in L15. | It is not an opioid agonist and has no role in managing opioid withdrawal; it is used for nicotine dependence and depression. |",
    "objective": "Recognize methadone, a long-acting opioid agonist that prevents withdrawal and cravings, as the printed answer for the Q146 opioid-withdrawal context.",
    "source": "neuropsychiatry & neurosurgery qb.pdf p.90 (answer p.91). The answer page prints the bare letter with no option name beside it, so the letter-versus-name cross-check was unavailable for this key."
  },
  {
    "id": "npqb-ps-148",
    "bank": "gradegain",
    "module": "neuropsych",
    "chapter": "ps-pharm",
    "stem": "A patient stops sertraline abruptly after 6 months and reports electric-shock sensations and dizziness. What is the diagnosis?",
    "options": [
      "Serotonin syndrome",
      "Antidepressant discontinuation syndrome",
      "Bipolar disorder",
      "Opioid withdrawal"
    ],
    "answer": 1,
    "explanation": "The correct answer is **Antidepressant discontinuation syndrome**. The stem describes the abrupt cessation of an SSRI (sertraline) and the subsequent onset of sensory symptoms (electric-shock sensations) and disequilibrium (dizziness), which are hallmark features of SSRI discontinuation syndrome. \n\nThe lecture deck `L17) Psychopharmacology` has a special-considerations slide (slide 14) with the printed hub title \"Primary SSRI discontinuation syndrome\" which explicitly lists \"Electric-shock-like sensations\" under Sensory symptoms and \"Dizziness\" under Disequilibrium. The draft states that this syndrome typically occurs within days of stopping an SSRI after prolonged use (not taken from the course material; the timing awaits a human check). Its proposed mechanism of rapid down-regulation of serotonergic autoreceptors is unresolved: L17 slide 14 does not state a mechanism, while slide 7’s autoreceptor caption concerns SSRI action. This mechanism claim is not taken from the course material and is retained as a draft claim for human review, not established here.\n\nAnalysis of incorrect options:\n\n| Option | Actual Concept | Why It Is Incorrect |\n| :--- | :--- | :--- |\n| **Serotonin syndrome** | A potentially life-threatening condition of excessive serotonergic activity, usually from drug interactions or overdose. Features include agitation, hyperthermia, clonus, and hyperreflexia (L16’s serotonin toxicity sections). | The stem describes symptoms upon *discontinuation*, not initiation/overdose of a serotonergic agent. The specific \"electric-shock\" sensation is characteristic of discontinuation, not serotonin syndrome. |\n| **Bipolar disorder** | A mood disorder with episodes of mania/hypomania and depression. | Abruptly stopping an antidepressant can precipitate a depressive episode or, in susceptible individuals, a manic switch (not taken from the course material; retained as a draft claim for human review), but the specific symptoms described (electric shocks, dizziness) are not diagnostic of bipolar disorder itself. |\n| **Opioid withdrawal** | Characterized by autonomic hyperactivity (rhinorrhea, diarrhea) and muscle aches (not taken from the course material). | The highlighted symptoms are sensory and balance symptoms; the context is antidepressant discontinuation. Q146 supplies the different opioid-cessation context with rhinorrhea and diarrhea. |\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
    "objective": "The question tests the recognition of the symptom profile of antidepressant discontinuation syndrome after abrupt SSRI cessation.",
    "source": "neuropsychiatry & neurosurgery qb.pdf p.90 (answer p.91). The answer page prints the bare letter with no option name beside it, so the letter-versus-name cross-check was unavailable for this key.",
    "note": "Unresolved draft claims: onset within days and a mechanism of rapid down-regulation of serotonergic autoreceptors after SSRI cessation. These are not taken from the course material; L17 slide 7 describes SSRI action and slide 14 lists discontinuation symptoms without this mechanism. The claimed discontinuation-associated manic switch also awaits a human check."
  },
  {
    "id": "npqb-ps-149",
    "bank": "gradegain",
    "module": "neuropsych",
    "chapter": "ps-pharm",
    "stem": "The therapeutic lithium serum range is:",
    "options": [
      "0.1–0.5 mEq/L",
      "0.6–1.2 mEq/L",
      "1.5–2.5 mEq/L",
      "3.0–4.0 mEq/L"
    ],
    "answer": 1,
    "explanation": "The correct answer is **0.6–1.2 mEq/L**. This is the staged option selected by the printed key. Its general application as a therapeutic window for bipolar disorder and recurrent major depression is not taken from the course material; the lecture does not supply a serum range. \n\nThe lecture deck `L17) Psychopharmacology` lists lithium as a mood stabilizer (slide 23) and discusses its side effects (slide 24) and toxicity (slide 25), but it does **not** print the specific serum therapeutic range. The range 0.6–1.2 mEq/L comes directly from staged option B. The draft’s generalization that levels below 0.6 mEq/L are sub-therapeutic and levels above 1.2 mEq/L increase toxicity risk (e.g., confusion, ataxia, renal issues) is not taken from the course material; these clinical thresholds await a human check. L17 slide 25 lists toxicity symptoms without serum thresholds.\n\nAnalysis of incorrect options:\n\n| Option | Actual Concept | Why It Is Incorrect |\n| :--- | :--- | :--- |\n| **0.1–0.5 mEq/L** | Described in the draft as sub-therapeutic (not taken from the course material; clinical classification awaits a human check). | The draft describes it as generally too low for mood-stabilizing effects (not taken from the course material; pending human review). |\n| **1.5–2.5 mEq/L** | Described in the draft as moderate to severe toxicity (not taken from the course material; the severity classification awaits a human check). | The draft associates it with significant neurological and renal toxicity requiring urgent intervention (not taken from the course material; pending human review). |\n| **3.0–4.0 mEq/L** | Described in the draft as severe, life-threatening toxicity (not taken from the course material; the severity classification awaits a human check). | The draft describes an emergency with risk of seizures, coma and death (not taken from the course material; pending human review). |\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
    "objective": "The question tests the knowledge of the specific therapeutic serum concentration range for lithium.",
    "source": "neuropsychiatry & neurosurgery qb.pdf p.90 (answer p.91). The answer page prints the bare letter with no option name beside it, so the letter-versus-name cross-check was unavailable for this key.",
    "note": "The four option ranges are copied from staging. Clinical use of 0.6 and 1.2 mEq/L as general thresholds and the severity labels attached to 1.5–2.5 mEq/L and 3.0–4.0 mEq/L are not taken from the course material and remain unresolved for human review."
  },
  {
    "id": "npqb-ps-150",
    "bank": "gradegain",
    "module": "neuropsych",
    "chapter": "ps-pharm",
    "stem": "Which of the following medications is a nicotine receptor partial agonist?",
    "options": [
      "Bupropion",
      "Naltrexone",
      "Nicotine patch",
      "Varenicline"
    ],
    "answer": 3,
    "explanation": "The correct answer is **Varenicline**. Varenicline is a nicotinic acetylcholine receptor partial agonist used for smoking cessation. The draft specifies the selective α4β2 subtype (not taken from the course material); that numerical subtype awaits a human check. \n\nThe lecture `L15) substance related disorder and psychiatry emergency` explicitly states in its \"Pharmacotherapy for addiction\" section under nicotine: \"Nicotine receptor partial agonist (varenicline)\". It also lists other agents: nicotine replacement therapies (patch, gum, lozenge) and bupropion, which is noted as a nicotine receptor antagonist with dopaminergic action.\n\nAnalysis of incorrect options:\n\n| Option | Actual Concept | Why It Is Incorrect |\n| :--- | :--- | :--- |\n| **Bupropion** | An NDRI antidepressant (the NDRI identification is not taken from the course material) also used for smoking cessation. The lecture classifies it as a \"Nicotine receptor antagonist\" (with dopaminergic action). | It is an antagonist, not a partial agonist. |\n| **Naltrexone** | A long-acting opioid antagonist listed for opiate dependence in L15; its use for alcohol use disorder is not taken from the course material. | It belongs to the opioid-antagonist entry in L15, not the nicotine partial-agonist entry. |\n| **Nicotine patch** | A form of nicotine replacement therapy (NRT) that delivers nicotine transdermally. | It supplies nicotine as an agonist replacement rather than varenicline’s partial agonism (the full-agonist distinction is not taken from the course material). |\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
    "objective": "The question tests the identification of varenicline's mechanism as a nicotine receptor partial agonist.",
    "source": "neuropsychiatry & neurosurgery qb.pdf p.90 (answer p.91). The answer page prints the bare letter with no option name beside it, so the letter-versus-name cross-check was unavailable for this key.",
    "note": "The draft’s α4β2 receptor subtype is not taken from the course material; L15 states nicotine receptor partial agonist without the subtype. The subtype awaits a human check."
  },
  {
    "id": "npqb-ps-151",
    "bank": "gradegain",
    "module": "neuropsych",
    "chapter": "ps-emerg",
    "stem": "A 24-year-old man with chronic schizophrenia that is maintained on antipsychotic treatment was brought to the emergency room after being found lying fixed in bed and is unable to communicate. Examination revealed that the patient was confused and disoriented. He has severe muscle rigidity and a temperature of 39.4 C. His blood pressure was 180/100 mmHg. His CBC showed leukocytosis. What is the most appropriate first line drug for treatment of this patient?",
    "options": [
      "Bromocriptine",
      "Lithium",
      "Haloperidol",
      "Lamotrigine"
    ],
    "answer": 0,
    "explanation": "The bank prints an explanation box for this question. **Transcribed verbatim as printed:**\n\n> This patient is presenting with neuroleptic malignant syndrome (NMS), a rare but life-threatening condition associated with the use of antipsychotics. Key features include: Severe muscle rigidity Hyperthermia (temperature >38°C) Autonomic dysregulation (e.g., hypertension). Altered mental status (e.g., confusion, disorientation). Leukocytosis and elevated creatine kinase (CK) levels. Bromocriptine, a dopamine agonist, is commonly used to counteract dopamine receptor blockade caused by antipsychotics.\n\nThe printed explanation names NMS and describes bromocriptine as commonly used; it does not itself call it first-line. Bromocriptine is the printed answer among these options. The lecture `L15) substance related disorder and psychiatry emergency` describes NMS in its \"Neuroleptic Malignant Syndrome\" section, listing the tetrad (mental status change, rigidity, fever, dysautonomia) and noting that \"Dopaminergic drugs, such as bromocriptine and amantadine\" are used in treatment. The staged stem prints 39.4 C and 180/100 mmHg; the staged box separately prints temperature >38°C. These numerical strings are preserved. Bromocriptine works by stimulating dopamine receptors, counteracting the antipsychotic dopamine blockade described in the printed box. L15 also lists discontinuing the offending drug, ICU admission and supportive care; the keyed drug is part of management.\n\nAnalysis of incorrect options:\n\n| Option | Actual Concept | Why It Is Incorrect |\n| :--- | :--- | :--- |\n| **Lithium** | A mood stabilizer used in bipolar disorder. | It is not the NMS treatment named here; the draft’s warning that lithium could worsen the condition or contribute to toxicity is not taken from the course material. |\n| **Haloperidol** | A typical antipsychotic (dopamine D2 antagonist). | It is an *antipsychotic* and would likely *worsen* NMS, which is caused by dopamine blockade. It is a potential precipitant, not a treatment. |\n| **Lamotrigine** | An anticonvulsant/mood stabilizer used in bipolar disorder. | It has no role in the acute management of NMS, which requires dopaminergic stimulation. |",
    "objective": "Recognize the bank’s NMS presentation and its keyed drug, bromocriptine, within management that also requires stopping the offending drug and supportive care.",
    "source": "neuropsychiatry & neurosurgery qb.pdf p.90 (answer p.91). The answer page prints the bare letter with no option name beside it, so the letter-versus-name cross-check was unavailable for this key."
  },
  {
    "id": "npqb-ps-152",
    "bank": "gradegain",
    "module": "neuropsych",
    "chapter": "ps-mood",
    "stem": "In managing a recurrent major depression, which of the following needs to be added to antidepressants?",
    "options": [
      "Antipsychotics",
      "ECT",
      "Mood stabilized",
      "Anti-convulsant"
    ],
    "answer": 2,
    "explanation": "The correct answer is **Mood stabilized**, the staged option selected by the printed key. For recurrent major depressive disorder, particularly with a history of multiple episodes or inadequate response to antidepressants alone, augmentation with a mood stabilizer (e.g., lithium) is a strategy described by the draft to prevent relapse (this treatment-strategy detail is not taken from the course material; L17 lists the indication without a treatment algorithm). \n\nThe lecture `L17) Psychopharmacology` on slide 22, the mood-stabilizer indications slide, explicitly lists \"Recurrent major depressive disorder\" as an indication for mood stabilizers. The draft links augmentation to mood stabilization and reduced recurrence (not taken from the course material); the cited slide supplies the indication, not this explanation of benefit. \n\nAnalysis of incorrect options:\n\n| Option | Actual Concept | Why It Is Incorrect |\n| :--- | :--- | :--- |\n| **Antipsychotics** | Some atypical antipsychotics (e.g., quetiapine, aripiprazole) are described by the draft as FDA-approved adjuncts for major depression (the named-agent and regulatory details are not taken from the course material and await a human check). L17 slide 17 explicitly lists antipsychotic adjunctive therapy for treatment-resistant major depression. | While they are a possible augmentation strategy, the question asks what \"needs to be added\" based on standard teaching, and the lecture slide specifically lists recurrent major depression under mood stabilizers. The draft’s first-line ranking of mood stabilizers, especially lithium, is not taken from the course material; slide 22 does not rank augmentation options. |\n| **ECT** | Electroconvulsive therapy is a treatment for severe, treatment-resistant, or acute suicidal depression; `L18) Devices in Psychiatry` lists treatment-resistant depression and acute suicidality among ECT indications. | It is a treatment modality, not a medication \"added\" to an antidepressant regimen in the same sense; pharmacotherapy failure is one indication, while acute suicidality is a separate indication in L18. |\n| **Anti-convulsant** | Some anticonvulsants (e.g., lamotrigine, valproate) are used as mood stabilizers. | L17 slide 23 groups carbamazepine, lamotrigine and valproic acid / divalproex as anticonvulsant mood stabilizers, alongside lithium. The classes overlap; the bank’s printed key remains C. |\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
    "objective": "The question tests the knowledge that mood stabilizers are indicated as an augmentation strategy for recurrent major depressive disorder.",
    "source": "neuropsychiatry & neurosurgery qb.pdf p.90 (answer p.91). The answer page prints the bare letter with no option name beside it, so the letter-versus-name cross-check was unavailable for this key.",
    "note": "The draft’s named-agent FDA-approval claim and first-line augmentation ranking are not taken from the course material and await a human check. L17 states indications, including both mood stabilizers for recurrent major depression and antipsychotic adjuncts for treatment-resistant major depression."
  },
  {
    "id": "npqb-ps-153",
    "bank": "gradegain",
    "module": "neuropsych",
    "chapter": "ps-pharm",
    "stem": "Conventional antipsychotics carry the risk of having extra-pyramidal side effects as they work in?",
    "options": [
      "Striatal dopaminergic 3 receptors",
      "Striatal dopaminergic 2 receptors",
      "Prefrontal dopaminergic 3 receptors",
      "Mesolimbic dopaminergic 2 receptors"
    ],
    "answer": 1,
    "explanation": "The bank prints an explanation box for this question. **Transcribed verbatim as printed:**\n\n> Conventional (typical) antipsychotics, such as haloperidol and chlorpromazine, block dopamine D2 receptors in various dopaminergic pathways in the brain. The extrapyramidal side effects (EPS) arise primarily due to dopamine D2 receptor blockade in the striatal (nigrostriatal) pathway, which plays a critical role in motor control.\n\nThe printed box attributes EPS to D2 blockade in the striatal (nigrostriatal) pathway. The prose in `L15) substance related disorder and psychiatry emergency` links nigrostriatal D2 receptor antagonism to rigidity and tremor in its NMS section. The additional EPS examples—dystonia, akathisia, parkinsonism and tardive dyskinesia—are not taken from the course material.\n\nAnalysis of incorrect options:\n\n| Option | Actual Concept | Why It Is Incorrect |\n| :--- | :--- | :--- |\n| **Striatal dopaminergic 3 receptors** | The draft describes striatal D3 receptors as distinct from the D2 target named in the printed box. Its receptor-distribution claim is not taken from the course material and awaits a human check. | L17 slide 18 describes typical antipsychotics as blocking dopamine receptors in all parts of the brain; this question’s printed box specifically attributes EPS to nigrostriatal D2 blockade. D3 is the different subtype printed in this distractor. |\n| **Prefrontal dopaminergic 3 receptors** | The draft asserts prefrontal D3 receptor expression and associates prefrontal D2 blockade with cognitive and negative symptoms. These receptor-specific claims are not taken from the course material and await a human check. | The box locates EPS in the striatal pathway. L17 slide 19 prints \"Mesocortical pathway dysfunction\" with \"Negative and cognitive symptoms\"; the draft’s further attribution specifically to prefrontal D2 blockade is not taken from the course material. |\n| **Mesolimbic dopaminergic 2 receptors** | L17 slide 19 prints \"Overactivity of the mesolimbic pathway\" with \"Positive symptoms\". The explanation that mesolimbic D2 blockade alleviates hallucinations and delusions is not taken from the course material. | Blockade here is the *desired effect* for treating psychosis, not the cause of EPS. EPS arise from blockade in a different pathway (nigrostriatal). |",
    "objective": "The question tests the understanding that extrapyramidal side effects of conventional antipsychotics result from dopamine D2 receptor blockade in the striatal (nigrostriatal) pathway.",
    "source": "neuropsychiatry & neurosurgery qb.pdf p.90 (answer p.91). The answer page prints the bare letter with no option name beside it, so the letter-versus-name cross-check was unavailable for this key.",
    "note": "The draft’s striatal/prefrontal D3 distribution and prefrontal D2-blockade claims are not taken from the course material and remain unresolved for human review. Printed receptor numbers in the options and both D2 occurrences in the staged box are unchanged."
  }
];
