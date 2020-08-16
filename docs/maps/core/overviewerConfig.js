var overviewerConfig = {
    "map": {
        "controls": {
            "mapType": true,
            "compass": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "zoom": true,
            "spawn": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1597611682"
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "imgextension": "png",
            "path": "day",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "poititle": "Markers",
            "world": "Core01",
            "last_rendertime": 1597611480,
            "base": "",
            "defaultZoom": 1,
            "isOverlay": false,
            "zoomLevels": 10,
            "maxZoom": 10,
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ]
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1
    }
};
