var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "imgextension": "png",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "maxZoom": 9,
            "path": "day",
            "minZoom": 0,
            "base": "",
            "zoomLevels": 9,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "world": "Core01",
            "isOverlay": false,
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1594929602
        }
    ],
    "map": {
        "cacheTag": "1594929847",
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "spawn": true
        },
        "debug": true
    },
    "worlds": [
        "Core01"
    ]
};
