var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0
    },
    "map": {
        "controls": {
            "mapType": true,
            "compass": true,
            "pan": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1594494356"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "zoomLevels": 9,
            "path": "day",
            "imgextension": "png",
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "base": "",
            "last_rendertime": 1594493988,
            "defaultZoom": 1,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "poititle": "Markers",
            "name": "Daytime Render",
            "isOverlay": false,
            "maxZoom": 9
        }
    ]
};
