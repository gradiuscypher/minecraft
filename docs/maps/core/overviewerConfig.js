var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1597064482",
        "controls": {
            "spawn": true,
            "mapType": true,
            "pan": true,
            "overlays": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true
        },
        "debug": true
    },
    "tilesets": [
        {
            "isOverlay": false,
            "poititle": "Markers",
            "maxZoom": 10,
            "minZoom": 0,
            "showlocationmarker": true,
            "path": "day",
            "world": "Core01",
            "zoomLevels": 10,
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1597064280,
            "imgextension": "png",
            "north_direction": 0,
            "defaultZoom": 1,
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
