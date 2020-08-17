var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "maxZoom": 10,
            "showlocationmarker": true,
            "base": "",
            "poititle": "Markers",
            "north_direction": 0,
            "imgextension": "png",
            "minZoom": 0,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "last_rendertime": 1597647480,
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "isOverlay": false
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "compass": true,
            "mapType": true,
            "zoom": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1597647684"
    },
    "worlds": [
        "Core01"
    ]
};
