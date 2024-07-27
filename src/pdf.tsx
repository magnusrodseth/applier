import React from "react";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  View,
  pdf,
} from "@react-pdf/renderer";
import fs from "fs";
import { marked } from "marked";
import Html from "react-pdf-html";

const registerGeorgiaFonts = async () => {
  Font.register({
    family: "Georgia",
    src: "fonts/georgia/georgia.ttf",
    fontStyle: "normal",
    fontWeight: "normal",
  });

  Font.register({
    family: "Georgia",
    src: "fonts/georgia/georgia-italic.ttf",
    fontStyle: "italic",
    fontWeight: "normal",
  });

  Font.register({
    family: "Georgia",
    src: "fonts/georgia/georgia-bold.ttf",
    fontStyle: "normal",
    fontWeight: "bold",
  });

  Font.register({
    family: "Georgia",
    src: "fonts/georgia/georgia-italic-bold.ttf",
    fontStyle: "italic",
    fontWeight: "bold",
  });
};

registerGeorgiaFonts();

// Define the necessary Tailwind CSS styles directly
const styles = StyleSheet.create({
  body: {
    margin: 0,
    padding: 32,
    fontFamily: "Georgia",
    color: "black",
    backgroundColor: "white",
    lineHeight: 1.5,
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 24,
  },
  h2: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 16,
  },
  p: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 12,
  },
});

const CoverLetterDocument = ({ htmlContent }: { htmlContent: string }) => (
  <Document>
    <Page style={styles.body}>
      <View>
        <Html
          stylesheet={{
            ...styles,
          }}
        >
          {htmlContent}
        </Html>
      </View>
    </Page>
  </Document>
);

export async function generatePDF(markdownPath: string, outputPath: string) {
  const markdownContent = fs.readFileSync(markdownPath, "utf8");
  const htmlContent = await marked(markdownContent);
  const doc = <CoverLetterDocument htmlContent={htmlContent} />;
  const pdfStream = await pdf(doc).toBlob();
  fs.writeFileSync(outputPath, Buffer.from(await pdfStream.arrayBuffer()));
}
