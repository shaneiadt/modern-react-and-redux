import React, { useState } from "react";
import { Accordion, Icon } from 'semantic-ui-react';

export const AccordionComponent = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Accordion fluid styled>
            {items.map((item, index) => (
                <React.Fragment key={`accordion-item-${index}`}>
                    <Accordion.Title
                        active={activeIndex === index}
                        index={index}
                        onClick={() => setActiveIndex(index)}
                    >
                        <Icon name='dropdown' />
                        {item.title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === index}>
                        <p>
                            {item.content}
                        </p>
                    </Accordion.Content>
                </React.Fragment>
            ))}
        </Accordion>
    );
}