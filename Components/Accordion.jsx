import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderAccordionSection = (section, content) => (
    <View key={section} style={{ marginBottom: 10 }}>
      <TouchableOpacity onPress={() => handleToggle(section)}>
        <View
          style={{
            backgroundColor: "grey",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>{section}</Text>
          <Text>{activeSection === section ? "-" : "+"}</Text>
        </View>
      </TouchableOpacity>
      {activeSection === section && (
        <View style={{ padding: 10, backgroundColor: "#e0e0e0" }}>
          {content}
        </View>
      )}
    </View>
  );

  return (
    <View style={{ padding: 5 }}>
      {renderAccordionSection(
        "Q: HOW DO YOU PICK UP ALL THE LOOSE NAILS?",
        <Text>Content for Section 1</Text>
      )}
      {renderAccordionSection(
        "Q: HOW LONG DOES IT TAKE TO PUT ON A ROOF?",
        <Text>Content for Section 2</Text>
      )}
      {renderAccordionSection(
        "Q: WHAT IS A DIMENSIONAL SHINGLE?",
        <Text>Content for Section 3</Text>
      )}
      {renderAccordionSection(
        "Q: WHAT IS YOUR AVERAGE WAIT TIME?",
        <Text>Content for Section 4</Text>
      )}
      {renderAccordionSection(
        "Q: DO YOU OFFER FREE ROOF ESTIMATES?",
        <Text>Content for Section 5</Text>
      )}
      {renderAccordionSection(
        "Q: CAN I JUST PUT SHINGLES OVER MY EXISTING ROOF?",
        <Text>Content for Section 6</Text>
      )}
      {renderAccordionSection(
        "Q: WHAT TIME OF YEAR IS THE BEST TIME TO INSTALL A ROOF?",
        <Text>Content for Section 7</Text>
      )}
      {renderAccordionSection(
        "Q: WHAT ELSE DO YOU DO BESIDES ROOFING?",
        <Text>Content for Section 8</Text>
      )}
      {renderAccordionSection(
        "Q: WHAT KIND OF WORKERS DO YOU HAVE?",
        <Text>Content for Section 9</Text>
      )}
    </View>
  );
};

export default Accordion;
