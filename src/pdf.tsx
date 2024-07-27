import React from "react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  PDFDownloadLink,
  pdf,
} from "@react-pdf/renderer";
import fs from "fs";

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
});

const CoverLetterDocument = ({ content }: { content: string }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.text}>{content}</Text>
    </Page>
  </Document>
);

export async function generatePDF(markdownPath: string, outputPath: string) {
  const content = fs.readFileSync(markdownPath, "utf8");

  const doc = <CoverLetterDocument content={content} />;

  const pdfStream = await pdf(doc).toBlob();
  fs.writeFileSync(outputPath, Buffer.from(await pdfStream.arrayBuffer()));
}
