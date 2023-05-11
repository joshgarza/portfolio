import React, { useState, useEffect } from "react";

const loadingPhrases = [
  "Kernel kangaroos kicking up computations...",
  "Latency lemurs leaping through network delays...",
  "Matrix marmosets mapping multidimensional data...",
  "Node narwhals navigating through backend code...",
  "Overflow otters organizing stacks of data...",
  "Pipeline penguins pushing through processes...",
  "Query quokkas questing for database answers...",
  "Routing rabbits racing to establish connections...",
  "Stream salamanders swimming in data flow...",
  "Thread tigers tying up loose execution ends...",
  "Algorithm alligators aligning data...",
  "Binary badgers balancing calculations...",
  "Code chameleons compiling scripts...",
  "Database dingoes discovering information...",
  "Encryption echidnas encoding messages...",
  "File ferrets fetching resources...",
  "Gateway geckos guarding connections...",
  "HTTP hummingbirds handling requests...",
  "Input iguanodons interpreting user actions...",
  "JSON jellyfish joining data structures...",
  "Circuitry cats calculating a perfect solution...",
  "Data dolphins diving for information...",
  "Electron elephants evaluating possibilities...",
  "Function foxes fetching relevant results...",
  "Gigabyte giraffes galloping through data...",
  "Hardware hippos harmonizing tech performance...",
  "Internet iguanas interconnecting ideas...",
  "JavaScript jaguars jumping through code...",
  "Kilobyte koalas weaving knowledge...",
  "Logic lemurs linking layers of wisdom...",
  "Memory meerkats managing data...",
  "Network newts navigating the information superhighway...",
  "Optimization otters orchestrating outcomes...",
  "Protocol pandas processing paths...",
  "Query quokkas questing for answers...",
  "RAM raccoons rummaging through information...",
  "Software squirrels sorting solutions...",
  "Terabyte tigers tracking insights...",
  "Upload unicorns unifying understanding...",
  "Virtual vultures verifying data volumes...",
];

const getRandomPhrase = () => {
  return loadingPhrases[
    Math.floor(Math.random() * (loadingPhrases.length - 1))
  ];
};
export const LoadingSpinner = () => {
  const [randomPhrase, setRandomPhrase] = useState(getRandomPhrase());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomPhrase(getRandomPhrase());
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className="w-12 h-12 border-t-2 border-blue-500 border-solid rounded-full animate-spinner"
        style={{
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
        }}
      ></div>
      <p className="text-gray-700">{randomPhrase}</p>
      <p className="text-sm text-gray-500">
        Note: The responses generated by this application come from AI and may
        not be accurate or appropriate in all contexts.
      </p>
    </div>
  );
};
