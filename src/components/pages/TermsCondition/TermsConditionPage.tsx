import { BaseText, Container, Content, Section } from "@atoms"
import { termsConditionSectionData } from "@data"

import styles from "./terms-condition.module.css"
import { TextBlock, TextBlockOption } from "@molecules"

export default function TermsConditionPage() {
  const textBlockOptions: TextBlockOption = {
    flex: { direction: "row" },
    title: {
      tag: "p",
      weight: "semibold",
    },
  }
  return (
    <Section padding="lg">
      <Container>
        <Content
          padding="large"
          radius="none"
          shadow="none"
          className={styles.terms_page}
        >
          <Content align="center" justify="center" direction="column" wrap>
            <BaseText tag="h2">Terms & Conditions</BaseText>
            <BaseText tag="h4" variant="secondary" weight="semibold">
              Last Updated:  29/09/2025
            </BaseText>
            <BaseText tag="p" variant="tertiary">
              Amco Enterprise Limited (“Company,” “we,” “our,” or “us”) values
              your privacy. This Privacy Policy explains how we collect, use,
              and safeguard your personal information when you visit our website
              www.amcoenterprise.com or engage with our services.
            </BaseText>
          </Content>
        </Content>
        <Content
          padding="large"
          radius="none"
          shadow="none"
          className={styles.terms_page}
        >
          <Content direction="column" gap="xl">
            {termsConditionSectionData.map((section, index) => (
              <Content key={index} padding="medium" radius="none">
                <Content direction="column" gap="lg">
                  <BaseText tag="h3" variant="primary">
                    {section.title}
                  </BaseText>

                  {section.subtitle && (
                    <BaseText tag="h4" variant="primary">
                      {section.subtitle}
                    </BaseText>
                  )}

                  {section.description && (
                    <BaseText tag="p" variant="tertiary">
                      {section.description}
                    </BaseText>
                  )}

                  {section.list && (
                    <Content direction="column" gap="md">
                      {section.list.map((item, i) => (
                        <Content key={i} className={styles.section_list_item}>
                          <BaseText tag="p" variant="tertiary">
                            {item.listTitle ? (
                              <strong>{item.listTitle}</strong>
                            ) : (
                              <span className={styles.section_list_text}>
                                {item.description}
                              </span>
                            )}{" "}
                            {item.description}
                          </BaseText>
                        </Content>
                      ))}
                    </Content>
                  )}

                  {section.summary && (
                    <BaseText tag="p" variant="secondary">
                      {section.summary}
                    </BaseText>
                  )}
                </Content>
              </Content>
            ))}
            <Content padding="medium" radius="none">
              <Content
                direction="column"
                gap="sm"
                justify="start"
                className={styles.topMargin}
              >
                <BaseText tag="h3" weight="bold">
                  Amco Enterprise Limited
                </BaseText>
                <TextBlock
                  title="License No."
                  description="RL-1537, Ministry of Expatriates’ Welfare & Overseas Employment"
                  options={textBlockOptions}
                />
                <TextBlock
                  title="Phone:"
                  description="+880 02 41082691"
                  options={textBlockOptions}
                />
                <TextBlock
                  title="Mobile: "
                  description="+88 01671777774"
                  options={textBlockOptions}
                />
                <TextBlock
                  title="Email: "
                  description="info@amcoenterprise.com"
                  options={textBlockOptions}
                />
                <u>
                  <TextBlock
                    title="Website:"
                    description="www.amcoenterprise.com"
                    options={textBlockOptions}
                  />
                </u>
              </Content>
            </Content>
          </Content>
        </Content>
      </Container>
    </Section>
  )
}
