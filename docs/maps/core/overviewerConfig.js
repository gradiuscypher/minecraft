var overviewerConfig = {
    "map": {
        "controls": {
            "compass": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1595134880",
        "debug": true
    },
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384
    },
    "tilesets": [
        {
            "path": "day",
            "defaultZoom": 1,
            "world": "Core01",
            "base": "",
            "imgextension": "png",
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "maxZoom": 9,
            "isOverlay": false,
            "last_rendertime": 1595134680,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "zoomLevels": 9
        }
    ]
};
