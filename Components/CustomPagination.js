import React from "react";
import { StyleSheet } from "react-native";
import { Pagination } from "react-native-swiper-flatlist";

const styles = StyleSheet.create({
  paginationContainer: {
    bottom: 140,
  },
  pagination: {
    borderRadius: 700,
  },
});

export const CustomPagination = props => {
  return (
    <Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationDefaultColor="#E5E5E5"
      paginationActiveColor="#000000"
    />
  );
};
