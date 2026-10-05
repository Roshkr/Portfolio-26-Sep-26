import React from 'react';
import { motion } from 'motion/react';

interface CharacterRevealTextProps {
  text: string;
}

export const CharacterRevealText: React.FC<CharacterRevealTextProps> = ({ text }) => (
  <span aria-hidden="true">
    {text.split(/(\s+)/).map((token, tokenIndex) => (
      <React.Fragment key={tokenIndex}>
        {/\s+/.test(token) ? token : (
          <span className="inline-block whitespace-nowrap">
            {Array.from(token).map((character, characterIndex) => (
              <motion.span
                key={characterIndex}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
                }}
              >
                {character}
              </motion.span>
            ))}
          </span>
        )}
      </React.Fragment>
    ))}
  </span>
);