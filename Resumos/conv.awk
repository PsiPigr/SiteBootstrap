#!/bin/awk -f
{
    system("rm file.txt");
    system("ls >> file.txt");
    system("convert "$1"/*.jpeg pdfs/"$1".pdf");
}
