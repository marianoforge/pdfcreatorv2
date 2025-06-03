import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 40,
    paddingBottom: 60,
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  documentHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#6E7174",
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 10,
    textTransform: "uppercase",
    color: "#6E7174",
    letterSpacing: 1,
    fontWeight: 300,
  },
  sectionHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionHeaderTitle: {
    fontSize: 20,
    color: "#1B3A3A",
    fontWeight: "bold",
  },
  headerInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  headerDate: {
    fontSize: 10,
    marginBottom: 5,
  },
  headerPersonInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  headerName: {
    fontSize: 10,
    fontWeight: "bold",
  },
  headerContractNumber: {
    fontSize: 10,
    marginTop: 2,
  },
  headerDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    borderBottomStyle: "solid",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  brand: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  contractNumber: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    flexDirection: "row",
    display: "flex",
  },
  sectionNumber: {
    color: "#f97316",
    marginRight: 5,
  },
  sectionText: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "50%",
    padding: 10,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "left",
    borderTopWidth: 0.5,
    borderTopColor: "#E0E0E0",
    borderTopStyle: "solid",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#005546",
    fontFamily: "Helvetica",
  },
  footerTextLight: {
    fontWeight: "normal",
    color: "#333333",
  },
  pageNumber: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "#333333",
  },
});
