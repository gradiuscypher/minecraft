var overviewerConfig = {
    "map": {
        "controls": {
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1596704482"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "base": "",
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "north_direction": 0,
            "last_rendertime": 1596704280,
            "minZoom": 0,
            "defaultZoom": 1,
            "zoomLevels": 10,
            "maxZoom": 10,
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true
        }
    ],
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    },
    "worlds": [
        "Core01"
    ]
};
