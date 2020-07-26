var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "maxZoom": 9,
            "defaultZoom": 1,
            "world": "Core01",
            "base": "",
            "showlocationmarker": true,
            "north_direction": 0,
            "last_rendertime": 1595761080,
            "zoomLevels": 9,
            "imgextension": "png",
            "minZoom": 0,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "cacheTag": "1595761282",
        "controls": {
            "pan": true,
            "spawn": true,
            "overlays": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
