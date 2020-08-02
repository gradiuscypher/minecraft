var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "compass": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1596402084"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "zoomLevels": 10,
            "showlocationmarker": true,
            "world": "Core01",
            "isOverlay": false,
            "poititle": "Markers",
            "name": "Daytime Render",
            "path": "day",
            "base": "",
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "north_direction": 0,
            "last_rendertime": 1596401880,
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "maxZoom": 10
        }
    ]
};
