## install.packages("Hmisc")
library(foreign)

npors_df <- read.spss('~/Downloads/NPORS-2024-Data-Release/NPORS_2024_for_public_release.sav',to.data.frame=T)

head(npors_df)

colnames(npors_df)

unique(npors_df$EDUCATION)

library(ggplot2)
library(dplyr)

# Define colors
colors <- c("#6622ccff", "#623ceaff", "#226ce0ff", "#5fad56ff", "#98ce00ff", 
            "#ffb20fff", "#ef722dff", "#e7393fff", "#d81159ff")

# Specify columns for grouping and breakdown factor
group_col <- "EDUCATION"        # X-axis grouping
breakdown_col <- "MODE" # Fill color breakdown

# Aggregate data to calculate weighted proportions
weighted_df <- npors_df %>%
  group_by(.data[[group_col]], .data[[breakdown_col]]) %>%
  summarise(weighted_n = sum(WEIGHT, na.rm = TRUE), .groups = "drop") %>%
  group_by(.data[[group_col]]) %>%
  mutate(prop = weighted_n / sum(weighted_n))

# Filter for labels only for segments > 5%
weighted_df <- weighted_df %>%
  mutate(label = ifelse(prop > 0.05, paste0(round(prop * 100, 1), "%"), NA))

# Plot
ggplot(weighted_df, aes(x = .data[[group_col]], y = prop, fill = .data[[breakdown_col]])) +
  geom_bar(stat = "identity", position = "fill") +
  scale_y_continuous(labels = scales::percent_format()) +
  scale_fill_manual(values = colors) +
  geom_text(aes(label = label), position = position_fill(vjust = 0.5), color = "white", size = 4, na.rm = TRUE) +
  labs(
    title = "Proportion of Each Group Taken Up by Breakdown Factor",
    x = group_col,
    y = "Proportion",
    fill = breakdown_col
  ) +
  theme_minimal()


